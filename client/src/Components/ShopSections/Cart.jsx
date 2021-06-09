import React from 'react'
import styles from './sides.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCartItem, minusTotalPrice } from '../../actions/items'

function MiniItem({ item }) {
    const dispatch = useDispatch()
    const handleDeleteMiniItem = (e)=>{
        e.preventDefault()
        
        dispatch(deleteFromCartItem(item))
        dispatch(minusTotalPrice(item))
    }

    return(
    <div className={`${styles.miniItem}`}>
        <img className={`${styles.miniItem_img}`} alt={`${item.name}`} src={`${item.images[0]}`} />

        <div className={`${styles.miniItem_info}`}>
            <div className={`${styles.miniItem_name}`}>
                {item.name}
            </div>
            <div className={`${styles.miniItem_price}`}>
                {item.qty} x ${item.sale ? item.discount : item.price}
            </div>
        </div>

        <button className={`${styles.miniItem_btn}`} onClick={handleDeleteMiniItem} >
            x
        </button>
    </div>
    )
}

export default function Cart() {
    const {cartItems, totalPrice } = useSelector(state=>state)

    return (
    <div className={`${styles.cart}`}>
        <div className={`${styles.cart_header} satisfy`}>Cart</div>
        
        {cartItems.length !== 0 ? 
            <div className={`${styles.cart_info}`}>
                
                <div className={`${styles.cart_items}`}>
                    {cartItems.map((item,index)=>(
                        <div className={`${styles.cart_item}`} key={`${item}_${index}`}>
                            <MiniItem item={item} />
                        </div>
                    ))}
                </div>
           
                <div className={`${styles.cart_total}`}>Subtotal: </div>
                <div className={`${styles.cart_price}`}>${totalPrice}</div>
                <button className={`${styles.cart_view} rglrBtn`}>View cart</button>
                <button className={`${styles.cart_checkout} rglrBtn`}>checkout</button>
            </div>
        :
            <div className={`${styles.cart_empty}`} >No products in the cart.</div>

        }

    </div>
    )
}
