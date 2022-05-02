import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';


const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)



    return(
        <div className="CartWidget">
           <box-icon name="cart" alt='cart' className='CartImg'></box-icon>
           { getQuantity() }
        </div>
    );
}

export default CartWidget