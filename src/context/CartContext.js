import { createContext, useState } from 'react';

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [Cart, setCart] = useState([])
    console.log(Cart)
 // agrega productos al carrito, se utiliza en ItemDetail en función handleAdd
    // donde en el 2do parametro seteamos que addItem pase la info de productObj.
    //En linea 33 de ItemDetail lo ejecutamos en onAdd llamando a handleAdd.  
    const addItem = (productToAdd) => {
        setCart([...Cart, productToAdd])
    }
 //Muestra cantidad de productos en carrito en el CartWidgt
    const getQuantity = () => {
        let count = 0
        Cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }
// Verifica si X producto ya está en el carrito para evitar duplicados.
//el metodo some recorre el array y devuelve true cuando encuentra coincidencia. 
// Se utiliza en ItemDetail
    const isInCart = (id) => {
        return Cart.some(prod => prod.id === id )
    }
 // Para vaciar el carrito (sin uso aún).
    const clearCart = () => {
        setCart([])
    }
//para remover productos del carrito (sin uso aún)
    const removeItem = (id) => {
        const products = Cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    return(
        <CartContext.Provider value={{
            Cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem, 
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext