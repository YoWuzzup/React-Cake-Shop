import React from 'react'
import { useDispatch } from 'react-redux'
import { createItem } from '../actions/items'

export default function AddingThings() {
    const [itemData, setItemData] = React.useState(
        {name: '', price: '', discount: '', sale: false, description: '', tags: '', images: ''}
    )
    const dispatch = useDispatch()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        dispatch(createItem(itemData))
    }

    return (
    <div style={{width: '100%',display: 'flex',justifyContent:'center',padding: '200px 0 0'}}>

        <form style={{display: 'flex', flexFlow: 'column', width: '20%'}} onSubmit={handleSubmit}>
            <input type='text' id='name' name='name' placeholder='Name' value={itemData.name} onChange={(e)=>setItemData({...itemData, name: e.target.value })} />
            <input type='number' id='price' name='price' placeholder='price' value={itemData.price} onChange={(e)=>setItemData({...itemData, price: e.target.value })} />
            <input type='number' id='discount' name='discount' placeholder='discount' value={itemData.discount} onChange={(e)=>setItemData({...itemData, discount: e.target.value })} />
            <input type='checkbox' id='sale' name='sale' placeholder='sale' value={itemData.sale} onChange={(e)=>setItemData({...itemData, sale: !itemData.sale })} />
            <input type='textarea' id='description' name='description' placeholder='description' value={itemData.description} onChange={(e)=>setItemData({...itemData, description: e.target.value })} />
            <input type='text' id='tags' name='tags' placeholder='tags' value={itemData.tags} onChange={(e)=>setItemData({...itemData, tags: e.target.value })} />
            <input type='text' id='images' name='images' placeholder='images' value={itemData.images} onChange={(e)=>setItemData({...itemData, images: e.target.value })} />

            <button type='submit' >Create shop item</button>
        </form>
    </div>
    )
}
