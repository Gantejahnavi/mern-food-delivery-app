import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const LateNight = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('/api/food/latenight').then(res => setFoods(res.data));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-8">
        🌙 Late Night Cravings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {foods.map((food, i) => (
          <motion.div
            key={food._id}
            className="bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img src={food.image} alt={food.name} className="rounded-lg mb-4 h-48 w-full object-cover" />
            <h2 className="text-xl font-semibold text-orange-300">{food.name}</h2>
            <p className="text-sm text-gray-300">{food.description}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-lg font-bold text-green-400">₹{food.price}</span>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-sm px-4 py-1 rounded-lg text-gray-900 font-semibold">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LateNight;
