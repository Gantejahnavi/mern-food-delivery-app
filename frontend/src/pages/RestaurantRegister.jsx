import React, { useState, useContext } from 'react';
import axios from 'axios';
import './RestaurantRegister.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../components/context/StoreContext';

const RestaurantRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { url } = useContext(StoreContext);

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${url}/api/restaurant/register`, { name, email, password });
      setMessage('Registration successful! Await admin approval.');
      setTimeout(() => navigate('/restaurant-login'), 2000);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="restaurant-register">
      <h2>Restaurant Register</h2>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default RestaurantRegister;
