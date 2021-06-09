import { combineReducers } from 'redux'

import { items, cartItems, totalPrice } from './items'
import { filters } from './filters'

export default combineReducers({
    items,
    cartItems,
    totalPrice,
    filters
})