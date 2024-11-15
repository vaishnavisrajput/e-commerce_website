import axios from 'axios'

export function fetchCategory() {
   return axios.get('https://fakestoreapi.com/products/categories')
        // .then((res) => {
        //     dispatch(setCategory(res.data))
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
}
export function fetchProducts() {
  return  axios.get('https://fakestoreapi.com/products')
        // .then((res) => {
        //     dispatch(setProduct(res.data))
        // }).catch((error) => console.log(error))
}

export function fetchFilteredProducts(category) {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`)
            // .then((res) => {
            //     setFilteredProd(res.data)
            // })
            // .catch((error) => console.log(error))
}
