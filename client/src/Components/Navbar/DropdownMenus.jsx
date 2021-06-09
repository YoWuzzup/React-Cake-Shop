import React from 'react'
import DropdownItem from './DropdownItem'
import styles from './Navbar.module.css';
import { CSSTransition } from 'react-transition-group'

export default function DropdownMenus({ btn, handleSubMenuHover, subMenuBtnHover }) {
    return (
    <div >
        {btn && btn.map((i,index)=>{
            const itemLink = i.lable.toLowerCase().split(' ').join('')

            return(
            <div key={`${i}_${index} ${itemLink}`}>
                <DropdownItem item={i.lable} handleSubMenuHover={handleSubMenuHover} itemLink={itemLink} />

                {i.subMenu && 
                    <CSSTransition
                            timeout={500}
                            // in={ subMenuBtnHover >= 0  }
                            // unmountOnExit
                        >   
                            <div className={`${styles.dropdown_subMenu}`} 
                            >
                                <DropdownMenus btn={i.subMenu} handleSubMenuHover={handleSubMenuHover} subMenuBtnHover={subMenuBtnHover} />
                            </div>
                    </CSSTransition>
                }
            </div>
        )})}
    </div>
    )
}
