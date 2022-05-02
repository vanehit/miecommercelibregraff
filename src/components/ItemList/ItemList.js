import Item from '../Item/Item'
import './ItemList.css'
import { memo } from 'react'

const ItemList = ({products}) => {

    return(
        <div className='List__group' onClick={() => console.log('Hice click en ItemList')}>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )
}

export default memo(ItemList, (oldProps, newProp) => {})