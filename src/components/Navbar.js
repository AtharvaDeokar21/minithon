import React from 'react';
import { Link } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">Dashboard</Link>
          </li>
          <li>
            <Link to="/expense-tracker" className="text-white hover:text-gray-400">Expense Tracker</Link>
          </li>
          <li>
            <Link to="/saving-goals" className="text-white hover:text-gray-400">Saving Goals</Link>
          </li>
          <li>
            <Link to="/bill-payment" className="text-white hover:text-gray-400">Bill Payment Calendar</Link>
          </li>
        </ul>

        {/* Total Spent & Bonus Points */}
        <div className="text-white flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <TotalSpentAndBonus />
        </div>
      </div>
    </nav>
  );
};

// Total Spent and Bonus Points Component
const TotalSpentAndBonus = () => {
  const totalSpent = 12000;  // Example: Total Spent
  const bonusPoints = 500;   // Example: Bonus Points

  return (
    <div className="flex space-x-6">
      <div className="text-center sm:text-left">
        <p className="font-semibold">Total Spent:</p>
        <p>₹{totalSpent}</p>
      </div>
      <div className="text-center sm:text-left">
        <p className="font-semibold">Bonus Points:</p>
        <p>{bonusPoints} pts</p>
      </div>
    </div>
  );
};

export default Navbar;
