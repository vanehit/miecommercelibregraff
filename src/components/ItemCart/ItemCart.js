import { useContext, useEffect, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemCart = () => {

    const { Cart, removeItem, clearCart } = useContext(CartContext)

    const [ total, setTotal] = useState(0)
    useEffect(()=>{
        const handlesumar = () =>{
            const sumar = Cart.map((saldo) => saldo.subtotal)
            .reduce((prev, curr) => {
                return prev + curr;
            }, 0);
            setTotal(sumar)
        };
        handlesumar();
    })

    if(Cart.length === 0) {
        return (
            <h1>No hay productos</h1>
        )
    }

    return (
        <>
        <h1>Cart</h1>
        <ul>
            {
                Cart.map(prod => <li key={prod.id}>{prod.name}  cantidad: {prod.quantity} precio uni: {prod.price}  subtotal: {prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}>X</button></li>)
            }   
        </ul>
        <p>Total: {total}</p>
            <button style={{textDecoration:'none', alignItems:'center'}} onClick={()=> clearCart()}>Limpiar Carrito</button>   
            <button> <Link to='/' style={{textDecoration:'none', alignItems:'center'}}>Terminar compra </Link></button>
        </>
    )
}

export default ItemCart