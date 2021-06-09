import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartItem, getTotalPrice } from '../../actions/items'

export default function Item({ item }) {
    const linkName = item.name.toLowerCase().split(' ').join('')
    const dispatch = useDispatch()
    const splitPrice = (str, token)=> {
        return (str || '').split(token).length > 1
    }  

    const addingToCartBtn = (e,item)=>{
        e.preventDefault()

        dispatch(addToCartItem(item))
        dispatch(getTotalPrice(item))
    }

    return (
        <div className={`${styles.item}`}>
            
            <Link to={`shop/product/${linkName}`} >
                <img className={`${styles.item_img}`} src={`${item.images.length > 1 ? item.images[0] : item.images}`} alt='yogurt' />
            </Link>
            
            {item.sale ? 
                <div className={`${styles.item_sale}`}>SALE!</div>
                :
                ''
            }

            <div className={`${styles.item_info}`}>
                <div className={`${styles.item_tags}`}>
                    <span className={`${styles.item_firstTag}`} >{item.tags[0]}</span>
                    <div className={`${styles.item_tagDot}`} />
                    {item.tags[1] &&
                        <span className={`${styles.item_secondTag}`} >{item.tags[1]}</span>
                    }
                </div>
                <Link to={`shop/product/${linkName}`} style={{all: 'unset', flexBasis: '100%', cursor: 'pointer'}} >
                    <div className={`${styles.item_name}`} >{item.name}</div>
                </Link>
    
                {item.sale ? 
                    <>
                    <div className={`${styles.item_oldPrice} ${styles.item_prices}`} >${splitPrice(item.price.toString(), '.') === true ? item.price : item.price + `.00`}</div>
                    <div className={`${styles.item_price} ${styles.item_prices}`} >${splitPrice(item.discount.toString(), '.') === true ? item.discount : item.discount + `.00`}</div>
                    </>
                    :
                    <div className={`${styles.item_price} ${styles.item_prices}`} >${splitPrice(item.price.toString(), '.') === true ? item.price : item.price + `.00`}</div>
                }
            </div>

            <button className={`${styles.item_btn} rglrBtn`} onClick={(e)=>addingToCartBtn(e, item)}>ADD TO CART</button>
        </div>
    )
}
