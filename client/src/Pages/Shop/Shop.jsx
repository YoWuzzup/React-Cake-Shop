import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  useLocation } from "react-router-dom";
import { getItems } from '../../actions/items'

import { Header, ShopContent, Footer } from '../../Components'

import * as images from '../../Imgs/ShopPage'

export default function Shop() {
    const items = useSelector((state)=>state.items)
    const location = useLocation()
    const dispatch = useDispatch()

    const [filterValue, setfilterValue] = React.useState({ min: 0, max: 30 })
    const [sorting, setSorting] = React.useState("");

    const params = location.search ? location.search : null;

    React.useEffect(()=>{
        dispatch(getItems(params, sorting, filterValue))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch, sorting])

    // pagination
    const [itemsPerPage] = React.useState(9)
    const [currentPage, setCurrentPage] = React.useState(1)
    // get current items
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
    // changing page
    const paginate = pageNumber => setCurrentPage(pageNumber)
    // scroll top
    const topRef = React.useRef(null)
    
    function handleToTopClick() {
        topRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    
    const handlePriceFilter = e => {
        console.log(filterValue);
        dispatch(getItems(params, sorting, filterValue))
    }

    const aboutUsHeaderInfo = {
        name: 'Products',
        text: 'Looking for the original and best high-protein smoothie on the planet? You\'ve found us! Oh, and we also sell ice cream.'
    }

    return (
    <>
    <Header name={aboutUsHeaderInfo.name} img={images.bg} text={aboutUsHeaderInfo.text} />
    <ShopContent 
        currentItems={currentItems}
        itemsPerPage={itemsPerPage} totalItems={items.length} 
        paginate={paginate} currentPage={currentPage}
        handleToTopClick={handleToTopClick} topRef={topRef}
        setSorting={setSorting} handlePriceFilter={handlePriceFilter}
        filterValue={filterValue} 
        setfilterValue={setfilterValue} indexOfFirstItem={indexOfFirstItem}
    />
    <Footer bgColor={'#38c4c4'} />
    </>
    )
}