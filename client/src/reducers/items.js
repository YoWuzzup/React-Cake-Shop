const initialState = {
    items: [],
    cartItems: [],
    totalPrice: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj + sum, 0);
const allPricesArr = [] 

export const items = (items = initialState.items, action)=>{
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [ ...items, action.payload ]
        default:
            return items
    }
}

export const cartItems = (cartItems = initialState.cartItems, action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
            if(cartItems.some(item => item._id === action.payload._id)){
                // increase qty if item already exists
                return cartItems.map(item => (item._id === action.payload._id ? { ...item, qty: item.qty + 1} : item ))
            }    
            return [ ...cartItems, { ...action.payload, qty: 1 }] // else add new item to cart
        case 'DELETE_FROM_CART':
            return cartItems
                .map(item => (item._id === action.payload._id ? { ...item, qty: item.qty - 1 } : item))
                .filter(item => item.qty > 0)
        default:
            return cartItems
    }
}

export const totalPrice = (totalPrice = initialState.totalPrice, action)=>{
    let gettingPrice
    switch (action.type) {
        case 'GET_TOTAL_PRICE':
            allPricesArr.push(action.payload.sale ? action.payload.discount : action.payload.price)  
            gettingPrice = getTotalPrice(allPricesArr).toFixed(2)

            return gettingPrice
        case 'MINUS_TOTAL_PRICE':
            const currentIndex = allPricesArr.indexOf(action.payload.sale ? action.payload.discount : action.payload.price)
            allPricesArr.splice(currentIndex,1)
            gettingPrice = getTotalPrice(allPricesArr).toFixed(2)

            return gettingPrice
        default:
            return totalPrice
    }
}