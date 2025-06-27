import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import AdminDashboard from './pages/AdminDashboard'
import LateNight from './pages/LateNight' // ✅ NEW IMPORT
import Order from './pages/Order';
import RestaurantLogin from './pages/RestaurantLogin';
import RestaurantRegister from './pages/RestaurantRegister';






const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/restaurant-register" element={<RestaurantRegister />} />

          <Route path="/restaurant-login" element={<RestaurantLogin />} />
          <Route path="/order" element={<Order />} />
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/latenight' element={<LateNight />} /> {/* ✅ NEW ROUTE */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
