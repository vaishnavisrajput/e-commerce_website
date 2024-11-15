import axios from 'axios'

export function fetchCategory() {
   return axios.get('https://fakestoreapi.com/products/categories')
        
}
export function fetchProducts() {
  return  axios.get('https://fakestoreapi.com/products')
       
}

export function fetchFilteredProducts(category) {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`)
           
}
