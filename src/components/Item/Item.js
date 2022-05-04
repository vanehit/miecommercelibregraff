import './Item.css'
import { Link } from 'react-router-dom'
import * as React from 'react';
import { Box } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography'; 


const Item = ({id, name, img, price}) => {
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Hice click en Item')
    }



    return (
        <Box className='Box' onClick={handleClick}>
            <Card className='Card'>
            <CardHeader
                title={name}   
            />
            <CardMedia className='Card__Media'
            component="img"
            height="300"
            image={img}
            alt={img}
            />
            <CardContent>
                <Typography>
                    <p className="Card__Info">
                        Precio: ${price}
                    </p>
                </Typography>
                <CardActions className='Card__Footer'>
                    <Link to={`/detail/${id}`} className='Card__btn'>Ver detalle</Link>
                </CardActions>
            </CardContent>
        </Card>
      </Box>
    );
    

}
        /*<Box className='ItemCard' onClick={handleClick}>
            <Card>
                <CardContent className="Card__title">
                    <Typography gutterBottom variant='h5' component='div'>
                        {name}
                    </Typography>                       
                    <picture>
                        <img src={img} alt={name} className="Card__Img"/>
                    </picture>
                    <Typography variant='body' color='text.secondary'>
                        <p className="Card__Info">
                            Precio: ${price}
                        </p>
                    </Typography> 
                    </CardContent>                    
                    <CardActions className='Card__Footer'>
                        <Link to={`/detail/${id}`} className='Card__btn'>Ver detalle</Link>
                    </CardActions>
                
            </Card>
        </Box>
    )
}*/

export default Item