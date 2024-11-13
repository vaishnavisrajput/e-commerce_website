import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './orderconfirm.css'
function OrderConfirmPage() {
  const [totalAmt, setTotalAmt] = useState(0);
  const cartProduct = useSelector((state) => state.products.cartProducts)
  console.log(cartProduct)
  

  const totalAmount = (cartProduct) => {
    cartProduct?.map((items, index) => {
     
        let [quantity, price] = items
      setTotalAmt(quantity * price)
     
    })
  }
  console.log(totalAmt, 'total')

  useEffect(() => {
    totalAmount();
  }, [])
  
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
          <h4>Total:</h4>
        </div>
      </div>
    </>
  )
}

export default OrderConfirmPage