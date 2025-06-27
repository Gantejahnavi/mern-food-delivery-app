import React from "react";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const summary = [
    { title: "Total Users", value: 123 },
    { title: "Total Orders", value: 54 },
    { title: "Restaurants", value: 8 },
    { title: "Pending Approvals", value: 3 },
  ];

  const pendingRestaurants = [
    { id: 1, name: "Tandoori Town", email: "tandoori@example.com" },
    { id: 2, name: "Midnight Meals", email: "meals@example.com" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {summary.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-xl rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
            <p className="text-3xl font-bold text-orange-500 mt-2">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Pending Restaurants */}
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Pending Restaurant Approvals</h2>
        <table className="w-full table-auto text-left">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingRestaurants.map((res) => (
              <tr key={res.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-2">{res.id}</td>
                <td className="p-2">{res.name}</td>
                <td className="p-2">{res.email}</td>
                <td className="p-2 space-x-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg">
                    Approve
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
