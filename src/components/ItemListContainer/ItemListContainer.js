import React, { useEffect, useState } from "react"
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where, limit, orderBy } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const collectionRef = categoryId 
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId), where('category', '==', categoryId))
            : query(collection(firestoreDb, 'products'), orderBy("name", "desc"), limit(3))
            // : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })

    }, [categoryId])

    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }


    return(
        <div  className='ItemListContainer'>
            <h1>{props.greeting}COMPRÁ DESDE CASA - ENVIOS GRATIS DE LIBREGRAFF</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer