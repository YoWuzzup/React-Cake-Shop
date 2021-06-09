import React from 'react'
import styles from './Pagination.module.css'

export default function Pagination({ itemsPerPage, totalItems, paginate, currentPage, handleToTopClick}) {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <ul className={`${styles.pagination}`}>
            {currentPage !== 1 ? <div className={`${styles.leftArrow} ${styles.arrows}`} onClick={()=> {paginate(--currentPage); handleToTopClick();}}></div> : null }
            
            {pageNumbers.map((item, index)=>(
                <li key={`${index}`} className={ currentPage === index + 1 ? 
                    `${styles.page} ${styles.active}` : `${styles.page}`}
                    onClick={()=> {paginate(item); handleToTopClick();}}>
                    {item}
                </li>
            ))}

            {currentPage !== pageNumbers.length ? <div className={`${styles.rightArrow} ${styles.arrows}`} onClick={()=> {paginate(++currentPage); handleToTopClick();}}></div> : null }
        </ul>
    )
}
