import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './checkout.css'
import { Link } from 'react-router-dom'
import { removeCartProduct, setProduct, addCartProduct, confirmOrders } from '../features/productSlice'

function CheckoutPage() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.cartProducts)
  
  console.log(product, "cart")


  const handleIncrement = (id) => {

    const updatedProducts =
      product.map((prod) => {
        if (prod.id === id ) {
          return { ...prod, quantity: parseInt(prod.quantity) + 1 }
        }
        else {
          return prod;
        }
      })
    dispatch(confirmOrders(updatedProducts))
    

  }

  const handleDecrement = (id) => {

    const updatedProducts =
      product.map((prod) => {
        if (prod.id === id) {
          return { ...prod, quantity: parseInt(prod.quantity) - 1 }
        }
        else {
          return prod;
        }
      })
    dispatch(confirmOrders(updatedProducts))
    
  }
 
  const handleBuyNow = (quantity) => {
    if(quantity ===  0){
      alert("Please add some quantity")
    }
  }
  console.log(product, "updtaes")


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
                  <div className='checkout'
                    key={index}>
                    <div className="view-product">
                      <img src={prod?.image} alt="" />
                    </div>
                    <div className="items">
                      <h3>{prod?.title}</h3>

                      <p>Price: ${prod?.price}</p>
                      {/* <p>Rating: {prod?.rating.rate}</p> */}
                      <div className="buttons">

                        
                          <div className='inc-dec'>
                            <button onClick={() => handleDecrement(prod.id)}>-</button>
                            <span>{prod.quantity}</span>
                            <button onClick={() => handleIncrement(prod.id)}>+</button>
                          </div>
                       
                        <button className='add-to-cart' onClick={() => dispatch(removeCartProduct(prod.id))}>Remove Item</button>

                      </div>
                    </div>


                  </div>

                )

              })}
              <div className="buy-now">
                <Link to='/orderconfirmation' className='buy-now-btn' onClick={() => handleBuyNow(quantity)} >Buy Now!</Link>
              </div>
            </div>
          )}



        </div>
      </div>
    </>
  )
}

export default CheckoutPage