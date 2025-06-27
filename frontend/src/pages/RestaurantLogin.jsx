import React, { useState, useContext } from 'react';
import axios from 'axios';
import './RestaurantLogin.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../components/context/StoreContext';

const RestaurantLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const { setToken, url } = useContext(StoreContext);

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${url}/api/restaurant/login`, { email, password });
      setToken(res.data.token);
      navigate('/restaurant-dashboard');
    } catch (err) {
      setErrorMsg(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="restaurant-login">
      <h2>Restaurant Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {errorMsg && <p className="error">{errorMsg}</p>}
    </div>
  );
};

export default RestaurantLogin;
