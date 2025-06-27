import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isApproved: {
    type: Boolean,
    default: false
  }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
