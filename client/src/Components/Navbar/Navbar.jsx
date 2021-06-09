import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navbar.module.css';
import DropdownMenus from './DropdownMenus'
import { CSSTransition } from 'react-transition-group'

import logo from '../../Imgs/HomePage/Logo.png';
import logoPink from '../../Imgs/HomePage/logo_pink.png';

const everythingAboutMenu = [
    {lable: 'Home', 
     menus: [
        {lable: 'The Gold One', }, 
        {lable: 'The Pastel One',}, 
        {lable: 'The Exotic One',}, 
        {lable: 'The Chocolate One',},
        {lable: 'The Single One',}, 
    ]},
    {lable: 'Products', 
     menus: [
        {lable: 'Overview',}, 
        {lable: 'Our menu', },
        {lable: 'Single product', subMenu: [{lable: 'Ice cream'},{lable: 'Smoothie'}]}, 
        {lable: 'Special offer', },
        {lable: 'Custom product calculator',},
    ]},
    {lable: 'About us', 
     menus: [
        {lable: 'Our team',}, 
        {lable: 'Our process',}, 
        {lable: 'Testimonials', },
        {lable: 'Under constraction', }
    ]},
    {lable: 'News & Recipes', 
     menus: [
        {lable: 'Columns view', }, 
        {lable: 'Standart view', }, 
        {lable: 'Grid view', },
        {lable: 'Single posts', subMenu: [{lable: 'Standard post'}, {lable: 'Image post'}, {lable: 'Grid carousel post'}, {lable: 'Carousel Gallery'}, {lable: 'Audio post'}, {lable: 'Video post'}, {lable: 'Link post'}, {lable: 'Quote post'}]},
        {lable: 'Recipes', subMenu: [{lable: 'Gallery recipe'}, {lable: 'Columns recipe'}, {lable: 'Checkout'}, {lable: 'Carousel recipe'}, {lable: 'Audio recipe'}, {lable: 'Video recipe'}]},
    ]},
    {lable: 'Contact', 
     menus: [
        {lable: 'Contact form', }, 
        {lable: 'Location', }
    ]},
    {lable: 'Shop', 
     menus: [
        {lable: 'Products', }, 
        {lable: 'Cart', }, 
        {lable: 'Checkout', },
        {lable: 'My account', },
    ]}
]

export default function Navbar() {
    const [width, setWidth] = React.useState(window.innerWidth)
    const [sticked, setSticked] = React.useState('unsticked')
    const [navBtnActive, setNavBtnActive] = React.useState('Home')
    const [navBtnHover, setNavBtnHover] = React.useState(null)
    const [subMenuBtnHover, setSubMenuBtnHover] = React.useState(null)
    const breakpoint = 1315
    const subMenuRefs = React.useRef([])
          subMenuRefs.current = []
    const menuRefs = React.useRef([])
          menuRefs.current = []

    const addRefs = (el) =>{
        if(el && !subMenuRefs.current.includes(el)){
            subMenuRefs.current.push(el)
        }
    }

    const addMenuRefs = (el) =>{
        if(el && !menuRefs.current.includes(el)){
            menuRefs.current.push(el)
        }
    }

    const handleScroll = ()=>{
        if(window.pageYOffset > 200){
            setSticked('sticked')
        } else {
            setSticked('unsticked')
        }
    }

    const handleEvents = (e)=>{
        setWidth(window.innerWidth)
        handleScroll()
    }

    const handleOnClick = (e)=>{
        const checkingArray = e.toLowerCase().split(' ')
        const item = e.toLowerCase().split(' ')

        checkingArray.length > 1 ? 
            setNavBtnActive(item[0]) : 
            setNavBtnActive(item.join(''))

        window.scrollTo(0,0)
    }
    const handleSubMenuHover =(item)=>{
        const itemToString = item.toLowerCase().split(' ').join('')
        setSubMenuBtnHover(itemToString)
    }

    const handleMouseEnter = (e)=>{
        let checkingArray = e.toLowerCase().split(' ')
        let item = e.toLowerCase().split(' ')

        checkingArray.length > 1 ? 
            setNavBtnHover(item[0]) : 
            setNavBtnHover(item.join(''))
    }

    const handleMouseLeave = (e, item)=>{
        setNavBtnHover(null)
    }

    const styleHover = {
        borderBottom: '5px solid #ff4562',
        color: sticked === 'sticked' ? '#ff4562' : '#fff'
    }

    React.useEffect(()=>{
        window.addEventListener('scroll', ()=> handleEvents())
        window.addEventListener('resize', ()=> handleEvents())
        return () => window.removeEventListener("resize scroll", ()=> handleEvents())
    },)

    const HeaderNavbar = ()=>{
    return (
        <div className={`${styles.Header_navbar}`}>
            <div className={`${styles.Header_buttons}`} 
                style={{color: sticked === 'sticked' ? '#000' : '#fff', justifyContent: 'space-evenly'}}
            > 
                {everythingAboutMenu && everythingAboutMenu.map((item,index)=>{
                    const itemLink = item.lable.toLowerCase().split(' ')

                    return(
                    <div className={`${styles.Header_button}`}
                        key={`${index}_${item.lable}`}
                        onMouseEnter={()=> handleMouseEnter(item.lable)}
                        onMouseLeave={(e)=> handleMouseLeave(e, item.lable)}
                        onClick={()=> handleOnClick(item.lable)}
                        style={navBtnActive === item.lable.split(' ').join('') ? styleHover : null}
                        ref={addMenuRefs}
                    >
                        <Link 
                            to={`/${itemLink.length > 1 ? itemLink[0] : itemLink.join('')}`} 
                            style={{ color: sticked === 'sticked' ? '#000' : '#fff', 
                                    textDecoration: 'none'}}
                            className={`${styles.header_link}`}
                        >
                            {item.lable}
                        </Link>


                        <CSSTransition
                            in={itemLink.length > 1 ? navBtnHover === itemLink[0] : navBtnHover === itemLink.join('')}
                            timeout={500}
                            unmountOnExit
                        >   
                            <div className={`${styles.dropdown}`} 
                            ref={addRefs}
                            >
                                <DropdownMenus btn={item.menus} subMenuBtnHover={subMenuBtnHover} handleSubMenuHover={handleSubMenuHover} />
                            </div>
                        </CSSTransition>
                        
                    </div>

                )})}

            </div>
            
            <div className={`${styles.Header_socialMedia}`} style={{color: sticked === 'sticked' ? '#000' : '#fff'}} >
                <FontAwesomeIcon className={`${styles.Header_icon}`} icon={['fab',`facebook-f`]} size='sm' />
                <FontAwesomeIcon className={`${styles.Header_icon}`} icon={['fab',`instagram`]} size='sm'/>
                <FontAwesomeIcon className={`${styles.Header_icon}`} icon={['fab',`twitter`]} size='sm'/>
                <FontAwesomeIcon className={`${styles.Header_icon}`} icon={['fab',`pinterest-p`]} size='sm'/>
            </div>
        </div>
    )}

    const DropDownMenu = ()=> {
        return(
        <div className={`${styles.Header_dropDownMenu}`}>
            <div className={`${styles.Header_menuLine}`} />
            <div className={`${styles.Header_menuLine}`} />
            <div className={`${styles.Header_menuLine}`} />
        </div>
        )
    }

    return (
        <div className={`${styles.Header}`}>
            <div className={`wrapper ${styles.Header_wrapper}`}>
                
                {width < breakpoint ? 
                <>
                    <DropDownMenu /> 
                    <Link to='/' >
                        <img alt='header logo' 
                            className={`${styles.Header_logo}`} 
                            src={logo} />
                    </Link>
                </>
                : 
                <div className={`${styles.navScrolling} ${sticked}`} >
                    <Link to='/' >
                        <img alt='header logo' 
                            className={`${styles.Header_logo}`} 
                            src={sticked === 'sticked' ? logoPink : logo} />
                    </Link>
                    <HeaderNavbar /> 
                </div>}

            </div>
        </div>
    )
};
