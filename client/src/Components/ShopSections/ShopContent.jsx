import React from 'react'
import { useDispatch } from 'react-redux'
import { setSortBy } from '../../actions/filters'
import { Cart, Filter, Item, FeaturedProducts, Pagination } from '../'
import styles from './ShopContent.module.css'

export default function ShopContent({ 
        filterValue, setfilterValue, handlePriceFilter, setSorting, 
        currentItems, itemsPerPage, totalItems, paginate, currentPage, 
        handleToTopClick, topRef, indexOfFirstItem}) {
    const dispatch = useDispatch()

    const handleSetSortBy = e => {
        dispatch(setSortBy(e.target.value))
        setSorting(e.target.value)
    };

    const multiply = itemsPerPage * currentPage 

    return (
    <div className={`${styles.shopContent}`} ref={topRef} >
    <div className={`${styles.shopContent_wrapper} wrapper`}>

        <div className={`${styles.shopContent_allItems}`}>

            <div className={`${styles.shopContent_showing}`}>
                {totalItems <= 9 ? 
                    <div >
                        Showing all {totalItems} results
                    </div>
                :   <div >
                        Showing {indexOfFirstItem + 1}-{multiply > totalItems ? `${totalItems}` : `${itemsPerPage * currentPage}`} of results
                    </div>}
            </div>
            <form className={`${styles.shopContent_sortingForm}`}>
                <select className={`${styles.shopContent_select}`} name='sorting' 
                    id='sorting' onChange={e=>handleSetSortBy(e)} 
                >
                    <option value='default' >Default sorting</option>
                    <option value='popularity' >Sort by popularity</option>
                    <option value='latest' >Sort by latest</option>
                    <option value='lowToHigh' >Sort by price: low to high</option>
                    <option value='highToLow' >Sort by price: high to low</option>
                </select>
            </form>

            <div className={`${styles.shopContent_allItemsInner}`}>
            {
                currentItems.map((item,index)=>(
                    <div className={`${styles.shopContent_itemComponent}`} 
                        key={`${item}_${index}`}
                    >
                        <Item item={item} />
                    </div>
                ))
            }
            </div>

            <Pagination itemsPerPage={itemsPerPage} 
                        totalItems={totalItems} paginate={paginate} 
                        currentPage={currentPage}
                        handleToTopClick={handleToTopClick} 
            />
        </div>
        
        <div className={`${styles.shopContent_sides}`}>

            <div className={`${styles.shopContent_cart}`}>
                <Cart />
            </div>

            <div className={`${styles.shopContent_filter}`}>
                <Filter handlePriceFilter={handlePriceFilter} 
                    filterValue={filterValue} 
                    setfilterValue={setfilterValue} 
                />
            </div>

            <div className={`${styles.shopContent_feature}`}>
                <FeaturedProducts />
            </div>
            
        </div>

    </div>
    </div>
    )
}
