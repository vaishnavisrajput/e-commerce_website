import Home from './Components/Home'
import './App.css'
import AboutUs from './Components/AboutUs'
import ProductDetail from './Components/ProductDetail'
import CheckoutPage from './Components/CheckoutPage'
import OrderConfirmPage from './Components/OrderConfirmPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function App() {


  return (

    <Router>
      <div className="header">
        <div className="title">
          <h1>Ship Shop</h1>
          <div className="nav">
            <Link to='/' className='nav-btn'>Home</Link>
            <Link to='/aboutus' className='nav-btn'>About</Link>
            <Link to='/shoppingcart' className='cart'><FontAwesomeIcon icon={faCartShopping} /></Link>
          </div>
        </div>
      </div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/productdetail' element={<ProductDetail />} />
        <Route path='/shoppingcart' element={<CheckoutPage/>} />
        <Route path='/orderconfirmation' element={<OrderConfirmPage/>} />
      </Routes>
    </Router>
    
  )
}

export default App
