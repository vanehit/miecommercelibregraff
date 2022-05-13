import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './ItemCart.css'

const ItemCart = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }
    return (
        <div className='table__dataItemCart'>
            <table className="table__ItemCart">
            <thead className="thead-dark">
                        <tr>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Artículo</th>
                            <th scope="col">Precio x unidad</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>  
                <tbody className="Body__ItemCart">
                    <tr>
                        <th scope="col">{quantity}</th>
                        <th scope="col">{name}</th>
                        <th scope="col">${price}</th>
                        <th scope="col"> Subtotal: ${price * quantity}</th>
                        <th scope="col"> <button className='btn__ItemCart' onClick={() => handleRemove(id)}>X</button></th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ItemCart