import * as api from '../api'

// action creators
export const getItems = (params, sorting, filter)=> async (dispatch) => {
    try {
        const { data } = await api.fetchItems(params, sorting, filter) 

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createItem = (item)=> async (dispatch) =>{
    try {
        const { data } = await api.createItem(item)

        dispatch({type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const addToCartItem = (item)=> async (dispatch) =>{
    try {
        dispatch({type: 'ADD_TO_CART', payload: item }) 
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFromCartItem = (item)=> async (dispatch) =>{
    try {
        dispatch({type: 'DELETE_FROM_CART', payload: item })
    } catch (error) {
        console.log(error.message);
    }
}

export const getTotalPrice = (item)=> async (dispatch) =>{
    try {
        dispatch({type: 'GET_TOTAL_PRICE', payload: item })
    } catch (error) {
        console.log(error.message);
    }
}

export const minusTotalPrice = (item)=> async (dispatch) =>{
    try {
        dispatch({type: 'MINUS_TOTAL_PRICE', payload: item })
    } catch (error) {
        console.log(error.message);
    }
}