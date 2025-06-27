import React, { useContext, useState } from 'react';
import { StoreContext } from "../components/context/StoreContext";
import axios from 'axios';
import './Order.css';

const Order = () => {
  const { cartItems, food_list, url, token } = useContext(StoreContext);
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = async () => {
    if (!address || !payment) {
      setMessage('Please fill in all fields.');
      return;
    }

    const orderItems = food_list
      .filter(item => cartItems[item._id] > 0)
      .map(item => ({
        id: item._id,
        name: item.name,
        quantity: cartItems[item._id],
      }));

    try {
      const res = await axios.post(`${url}/api/order/place`, {
        items: orderItems,
        user: token,
        address,
        payment,
      });
      setMessage('Order placed successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to place order.');
    }
  };

  return (
    <div className="order-page">
      <h2>Confirm Your Order</h2>

      <div className="order-summary">
        {food_list.filter(item => cartItems[item._id] > 0).map(item => (
          <div key={item._id}>
            {item.name} × {cartItems[item._id]}
          </div>
        ))}
      </div>

      <textarea
        placeholder="Enter delivery address..."
        value={address}
        onChange={e => setAddress(e.target.value)}
      ></textarea>

      <select value={payment} onChange={e => setPayment(e.target.value)}>
        <option value="">Choose payment</option>
        <option value="cash">Cash on Delivery</option>
        <option value="upi">UPI</option>
        <option value="card">Credit/Debit Card</option>
      </select>

      <button onClick={handleOrder}>Place Order</button>

      {message && <p className="order-message">{message}</p>}
    </div>
  );
};

export default Order;
