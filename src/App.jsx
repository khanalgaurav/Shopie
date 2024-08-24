import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import Contact from './pages/Contact'
import LoginSignup from './pages/LoginSignup'
import Wishlist from './pages/Wishlist'
import PageNotFound from './pages/PageNotFound'
import Offers from './components/Offers'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Offers/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/user/account' element={<Account/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/product' element={<ProductDetails/>}>
            <Route path=':productId' element={<ProductDetails/>}/>
          </Route>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/*' element={<PageNotFound/>}/>         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
