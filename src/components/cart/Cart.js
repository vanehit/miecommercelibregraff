import './Cart.css'
import { useContext, useState } from "react"
import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from "react-router-dom"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import Form from '../Form/ElementsInput'

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

   

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Vanesa Paola Soria',
                phone: '153555666',
                email: 'vanesasoria.com@gmail.com'
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []
        

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }
 
      return ( 
        <div align="center">
            <div>
                <h1>Mi Carrito</h1>
            </div>
            <table >
                <tbody>
                    <tr>
                        <td>{ cart.map(p => <ItemCart key={p.id} {...p}/>) }</td>
                    </tr>
                    <tr>
                        <td align="center"><h3>Total: ${getTotal()}</h3></td>
                    </tr>
                    <tr>
                        <div className='btn__CartCotainer'>
                            <td align="left"> <button onClick={() => clearCart()} className="btn__Cart">Limpiar carrito</button></td>
                            <td align="right"><Link to={`/form`}><button onClick={() => createOrder()} className="btn__Cart">Generar Orden</button></Link></td>

                        </div>
                    </tr>
                </tbody>
            </table>
                
        </div>
    )
}

export default Cart