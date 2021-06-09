import React from 'react'
import InputRange from 'react-input-range'
import { useDispatch } from 'react-redux'
import { setFilterPrice } from '../../actions/filters'

import 'react-input-range/lib/css/index.css';
import styles from './sides.module.css'
import './Slider.css'

export default function Filter({ handlePriceFilter, filterValue, setfilterValue }) {
    const dispatch = useDispatch()

    const handleChange = e => {
        setfilterValue(e.value)
        dispatch(setFilterPrice(e.value))
    }

    return (
    <div className={`${styles.filter}`}>

        <div className={`${styles.filter_header} satisfy`}>Filter by price</div>
        

        <div className={`${styles.filter_info} filter_info`}>
        
            <InputRange
                maxValue={30}
                minValue={0}
                step={10}
                value={filterValue}
                allowSameValues={true}
                name={'sorting'}
                onChange={value => handleChange({ value })}  
            />

            <button className={`${styles.filter_filterBtn} rglrBtn`}
                onClick={()=> handlePriceFilter(filterValue)}
            >
                Filter
            </button>
            <label className={`${styles.filter_label}`} htmlFor='sorting'>
                Price: ${filterValue.min} - ${filterValue.max} 
            </label>

        </div>

    </div>
    )
}
