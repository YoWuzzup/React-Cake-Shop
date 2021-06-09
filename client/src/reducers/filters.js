const initialState = {
    sortBy: 'default',
    filterPrice: {
        min: 0,
        max: 30
    }
}

export const filters = ( state = initialState, action)=>{
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'SET_FILTER_PRICE':
            return {
                ...state,
                filterPrice: {
                    min: action.payload.min,
                    max: action.payload.max
                }
            }
        default:
            return state
    }
}