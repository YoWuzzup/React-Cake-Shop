export const setSortBy = (sortBy)=> async (dispatch) =>{
    try {
        dispatch({ type: 'SET_SORT_BY', payload: sortBy })
    } catch (error) {
        console.log(error.message);
    }
}

export const setFilterPrice = ({ min, max })=> async (dispatch)=>{
    try {

        dispatch({type: 'SET_FILTER_PRICE', payload: { min, max }})        
    } catch (error) {
        console.log(error.message);
    }
}