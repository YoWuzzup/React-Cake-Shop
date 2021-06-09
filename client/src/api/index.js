import axios from 'axios'

const url = 'http://localhost:5000/'

export const fetchItems = async (params, sorting, filter)=> {
    try {
        let query
        
        if(params && !filter){
            query = params
        } else {
            query = `?price[gte]=${filter.min}&price[lte]=${filter.max}`
        }

        if(sorting){
            if(query.length === 0){
                query = `?sorting=${sorting}`
            } else {
                query = query + '&sorting=' + sorting
            }
        }

        return axios.get(`${url}shop${query}`)

    } catch (error) {
        console.log(error);
    }

}

export const createItem = (newItem)=> axios.post(`${url}`, newItem)