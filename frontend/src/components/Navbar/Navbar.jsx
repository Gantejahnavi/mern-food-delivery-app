import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from './../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from './../context/StoreContext'
<Link to="/restaurant-register">Restaurant Register</Link>
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home')
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/' className='logo-text'>
  Order<span className="highlight">On</span>The<span className="highlight">GO</span>
</Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>

        {/* 🌙 New Late Night Link */}
        <Link
  to='/latenight'
  onClick={() => setMenu('latenight')}
  className={`latenight ${menu === 'latenight' ? 'active' : ''}`}
>
  🌙 Late Night
</Link>
     <Link to="/restaurant-login" className="nav-login">
  Restaurant Login
</Link>

<Link to="/restaurant-register">Restaurant Register</Link>



        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
