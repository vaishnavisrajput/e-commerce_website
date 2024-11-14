import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './checkout.css'
import { Link } from 'react-router-dom'
import {removeCartProduct} from '../features/productSlice'

function CheckoutPage() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.cartProducts)

  const[checkoutQuantity, setCheckoutQuantity] = useState(0)
  const[flag, setFlag] = useState(false)
  console.log(product, "cart")

  
  const handleIncrement = (quantity) => {
      console.log(quantity)
      let quant = parseInt(quantity)
      setCheckoutQuantity(quant+1)
      setFlag(true)
  }
  console.log(checkoutQuantity, 'checking')
  const handleDecrement = (quantity) => {
    console.log(quantity)
    let quant = parseInt(quantity)
      setCheckoutQuantity(quant-1)
      setFlag(true)
  }
  
  return (
    <>
      <div className="checkout-cont">
        <div className='my-cart'>
          <h1>My Cart</h1>
          {product.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
            </div>
            
          ) : (
            <div className="checkout-items">
            {product.map((prod, index) => {
              return (
                <div className='checkout'>
                <div className="view-product">
                  <img src={prod?.image} alt="" />
                  </div>
                  <div className="items">
                    <h3>{prod?.title}</h3>
                  
                  <p>Price: ${prod?.price}</p>
                  <p>Rating: {prod?.rating.rate}</p>
                  <div className="buttons">

                    {flag === true ? (
                      <div className='inc-dec'>
                        <button>-</button>
                      <span>{checkoutQuantity}</span>
                      <button>+</button>
                      </div>
                    ) : (
                      <div className='inc-dec'>
                        <button onClick={() => handleDecrement(prod.quantity)}>-</button>
                      <span>{prod.quantity}</span>
                      <button onClick={() => handleIncrement(prod.quantity)}>+</button>
                      </div>
                    )}
                    <button className='add-to-cart' onClick={() => dispatch(removeCartProduct(prod.id))}>Remove Item</button>
                    
                  </div>
                  </div>

                  
                </div>

              )

            })}
              <div className="buy-now">
          <Link to='/orderconfirmation'  className='buy-now-btn'>Buy Now!</Link>
          </div>
          </div>
          )}
          
          
          
        </div>
      </div>
    </>
  )
}

export default CheckoutPage