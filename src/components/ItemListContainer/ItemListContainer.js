import React, { useEffect, useState } from "react"
import './ItemListContainer.css';
import { getProducts } from '../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) =>{
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()


    useEffect (() => {
        getProducts(categoryId).then (prods =>{
            setProducts(prods)
        }).catch(error =>{
            console.log(error)
        })
    }, [categoryId])

    return(
        <div>
            <h1>{props.greeting}COMPRÁ DESDE CASA - ENVIOS GRATIS DE LIBREGRAFF</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer