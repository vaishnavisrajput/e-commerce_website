import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './orderconfirm.css'
import { emptyCart } from '../features/productSlice'
function OrderConfirmPage() {
  const dispatch = useDispatch()
  const cartProduct = useSelector((state) => state.products.cartProducts)
  console.log(cartProduct)
  
  const total = cartProduct.reduce((acc, curr)=>
  {
    if(curr.quantity > 0){
      return acc + (curr.quantity * curr.price)
    }
    else{
      return curr.price;
    }
    
  }, 0);

  
  return (
    <>
      <div className='order-confirm'>
        <div className='confirmation-sec'>
          <h3>Yayyyy! Your order has been placed.</h3>
          <p>Delivery Date: 25/12/2024</p>
        </div>
        <div className='cart-products'>
          {cartProduct.map((prod) => {
            return (
              <div className="final-products">
                <img src={prod?.image} alt="" />
                <div className="final-product-details">
                <h3>{prod?.title}</h3>
                <p>Quantity: {prod?.quantity}</p>
                <p>Price: ${prod?.price}</p>
                </div>
                
              </div>
            )


          })}
        </div>
        <div className="total-amt">
          <h4>Total: ${total}</h4>
        </div>
        <div className="return">
        <Link className="return-btn" to='/' onClick={() => dispatch(emptyCart())}>Return to Homepage</Link>

        </div>
      </div>
    </>
  )
}

export default OrderConfirmPage