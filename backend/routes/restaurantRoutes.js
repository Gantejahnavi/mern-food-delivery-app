import express from 'express';
import Restaurant from '../models/restaurantModel.js'; // Create this model
import jwt from 'jsonwebtoken';

const router = express.Router();

// Restaurant Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const restaurant = await Restaurant.findOne({ email });

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    if (restaurant.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: restaurant._id }, 'secretkey');
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
// Restaurant Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await Restaurant.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    const newRestaurant = new Restaurant({ name, email, password, isApproved: false });
    await newRestaurant.save();
    res.json({ message: 'Registered successfully, wait for admin approval' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


export default router;
