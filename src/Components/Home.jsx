import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { productAsync, categoryAsync, filteredAsync } from '../features/productSlice'
import { viewProduct, setCategory, setProduct } from '../features/productSlice'
function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null) //to clear the filter
    const [flag, setFlag] = useState(false) //switching between all products and filtered products

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const product = useSelector((state) => state.products.products)
    const category = useSelector((state) => state.products.productCategory)
    const filteredProduct = useSelector((state) => state.products.filteredProducts)
    useEffect(() => {
        dispatch(categoryAsync())
        dispatch(productAsync())
    }, [])
    

    const handleCategoryChange = (category) => {
        dispatch(filteredAsync(category))
        setSelectedCategory(category)
        setFlag(true)
    }

    const handleProduct = (prod) => {
        dispatch(viewProduct(prod))
        navigate('/productdetail')
    }

    const handleClearFilter = () => {
        // Clearing the filter and show the list of all products
        setFlag(false);
        setSelectedCategory(null)
        dispatch(productAsync()); 
    };

   

    return (
        
        <>
            <div className="home">
                <div className="list">
                    {category.map((items, index) => {
                        return (
                            <div className="category-list" key={index}>
                                <input type="radio" 
                                name='category' 
                                checked={selectedCategory === items}
                                value={items} 
                                onClick={() => handleCategoryChange(items) }/>
                                <li>{items}</li>

                            </div>
                        )

                    })}
                    <button className='clear' onClick={() => handleClearFilter()}>clear filter</button>
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
                                {filteredProduct.map((prod, index) => {
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