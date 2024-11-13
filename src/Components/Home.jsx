import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import { viewProduct, setCategory, setProduct } from '../features/productSlice'
function Home() {

    const [filteredProd, setFilteredProd] = useState([])
    const [flag, setFlag] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const product = useSelector((state) => state.products.products)
    const category = useSelector((state) => state.products.productCategory)
    function fetchCategory() {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((res) => {
                dispatch(setCategory(res.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
    function fetchProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                dispatch(setProduct(res.data))
            }).catch((error) => console.log(error))
    }



    const handleCategory = (items) => {
        axios.get(`https://fakestoreapi.com/products/category/${items}`)
            .then((res) => {
                setFilteredProd(res.data)
            })
            .catch((error) => console.log(error))
        setFlag(true)
    }
    const handleProduct = (prod) => {
        dispatch(viewProduct(prod))
        navigate('/productdetail')
    }


    useEffect(() => {
        fetchCategory()
        fetchProducts()
    }, [])

    return (
        <>
            <div className="home">
                <div className="list">
                    {category.map((items, index) => {
                        return (
                            <div className="category-list" key={index}>
                                <input type="radio" name='category' value={items} onClick={() => { handleCategory(items) }} />
                                <li>{items}</li>

                            </div>
                        )

                    })}
                    <button className='clear' onClick={() => { setFlag(false) }}>clear filter</button>
                </div>

                <div className="products">
                    <div className="all-products">
                        <h1>All Products</h1>
                    </div>

                    <div className="all-prod">
                        {flag === false ? (
                            <div className="card">
                                {product.map((prod, index) => {
                                    return (

                                        <div className="product-list" key={index}>

                                            <img src={prod.image} alt="" />
                                            <h3>{prod.title}</h3>

                                            <p>Price: ${prod.price}</p>
                                            <p>Rating: {prod.rating.rate}</p>
                                            <button  className='view-btn' onClick={() => handleProduct(prod)}>View</button>
                                        </div>
                                    )
                                })}
                            </div>

                        ) : (
                            <div className="card">
                                {filteredProd.map((prod, index) => {
                                    return (

                                        <div className="product-list" key={index}>

                                            <img src={prod.image} alt="" />
                                            <h3>{prod.title}</h3>
                                            <p>Price: ${prod.price}</p>
                                            <p>Rating: {prod.rating.rate} </p>

                                            <button  className='view-btn' onClick={() => handleProduct(prod)}>View</button>
                                        </div>
                                    )
                                })}
                            </div>

                        )}

                    </div>

                </div>
            </div>
        </>
    )
}

export default Home