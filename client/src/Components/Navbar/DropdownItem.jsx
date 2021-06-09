import React from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom' 

export default function DropdownItem({item, handleSubMenuHover, itemLink}) {
    return (
        <Link to={`/${itemLink}`} style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer'}} >
            <div className={`${styles.DropdownItem}`} onMouseEnter={()=>handleSubMenuHover(item)} >
                {item}
            </div>
        </Link> 
    )
}
