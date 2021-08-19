import axios from 'axios';

// https://signsetta.herokuapp.com
export const getCategory = catId => {
    return axios.get(`/api/categories/${catId}`)
}

export const getCategories = () => {
    return axios.get('/api/categories')
}