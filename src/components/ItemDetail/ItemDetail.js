
import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'
import { Box } from '@material-ui/core';
import { Card } from 'semantic-ui-react'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart,  getQuantityProd } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleAdd = (count) => {
        const productObj = {
            id, name,price, quantity: count
        }

        addItem(productObj)
        setNotification('success', `Se agregaron ${count} ${name} correctamente`)
    }

    return (
        <Box className="Box__Detail">
            <Card className="Card__Detail">
                <CardHeader className='Card__title'
                    title={name}   
                />
                <CardMedia className='Card__Media'
                component="img"
                height="300"
                image={img}
                alt={name}
                />
                <CardContent>
                    <Typography>
                        <p className="Card__Detail-Info">
                            Categoria: {category}
                        </p>
                    </Typography>
                    <Typography>
                        <p className="Card__Detail-Info">
                            Descripción: {description}
                        </p>
                    </Typography>
                    <Typography>
                        <p className="Card__Detail-Info">
                            Precio: {price}
                        </p>
                    </Typography>
                    <CardActions className='Card__Footer'>
                        <div>
                            <table >
                                <tbody>
                                    <tr>
                                        <td align="left">{ isInCart(id) ? <button><Link to='/cart' className='btn__ItemDetail'>Ir al carrito</Link> </button> 
                                        : <ItemCount onAdd={handleAdd} stock={stock} initial={getQuantityProd(id)}/> } </td>
                                        <td align="right">{isInCart(id) ? <button><Link to='/cart'className='btn__ItemDetail' >Finalizar compra </Link></button> : "" } </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardActions>
                </CardContent>          
            </Card>
        </Box>
    )
}
export default ItemDetail