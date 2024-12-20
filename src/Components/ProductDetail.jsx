import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCartProduct } from '../features/productSlice';
import './productDetail.css'
import { useNavigate } from 'react-router-dom';

function ProductDetail() {
  const[quantity, setQuantity] = useState(1)
  const product = useSelector((state) => state.products.productDetail)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const addToCart = (product) => {
      
      dispatch(addCartProduct({...product, quantity}))
      alert("Added to cart.")
      navigate('/shoppingcart')
  }

  console.log(quantity)

  return (
    <>
      <div className="product-detail" >
        <div className="view-product">
        
        <img src={product?.image} alt="" />
        </div>
        <div className="item-details">
        <h3>{product?.title}</h3>
        <p>Price: ${product?.price}</p>
        <p>Rating: {product?.rating.rate}</p>
        <div className="buttons">
        <input onChange={(e) => setQuantity(e.target.value)} type="number" value={quantity} name="quantity" min={1} max={50} />
        <button className='add-to-cart' onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
        
       
        </div>
        
      </div>
    </>
  )
}

export default ProductDetail