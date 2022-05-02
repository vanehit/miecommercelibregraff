import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
 
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

 
    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }     
    }
 
    if(stock === 0) {
        return <button className='btn__Count' disabled>No hay stock</button>

    }

    return(
        <div align="center">          
            <table >
                <tbody>
                    <tr>
                        <td align="left"><button className="btn__decrement" onClick={decrement}>-</button></td>
                        <td align="center" style={{fontSize : '20px'}}>{quantity}</td>
                        <td align="right"><button className="btn__increment" onClick={increment}>+</button></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="5"><button className="btn__Count" onClick={() => onAdd(quantity)}>Agregar al carrito</button></td>
                    </tr>
 
                </tbody>
            </table>       
        </div>
    )
 
 }
    
 

export default ItemCount