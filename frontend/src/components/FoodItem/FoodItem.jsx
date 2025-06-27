import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
  <div className='food-item'>
    <div className="food-item-img-container">
      <img className='food-item-image' src={url + '/images/' + image} alt="" />
    </div>

    <div className="food-item-info">
      <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>

      {/* Add to Cart or Counter */}
      {
        !cartItems[id] ? (
          <button className='add-to-cart-btn' onClick={() => addToCart(id)}>Add to Cart</button>
        ) : (
          <div className="food-item-counter">
            <button onClick={() => removeFromCart(id)} className='counter-btn'>-</button>
            <span className="cart-count">{cartItems[id]}</span>
            <button onClick={() => addToCart(id)} className='counter-btn'>+</button>
          </div>
        )
      }
    </div>
  </div>
);

};

export default FoodItem;
