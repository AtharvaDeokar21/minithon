// BudgetManager.js
import React from 'react';
import { useBudget } from './BudgetContext';

const BudgetManager = () => {
  const { budget, setBudget } = useBudget();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBudget((prevBudget) => ({
      ...prevBudget,
      [name]: value,
    }));
  };

  return (
    <div className="budget-manager">
      <h3 className="text-lg font-semibold mb-4">Manage Your Budget</h3>

      <div className="mb-4">
        <label htmlFor="daily" className="block text-sm font-medium text-gray-700">
          Daily Budget (INR)
        </label>
        <input
          type="number"
          id="daily"
          name="daily"
          value={budget.daily}
          onChange={handleInput}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="e.g. 1000"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="monthly" className="block text-sm font-medium text-gray-700">
          Monthly Budget (INR)
        </label>
        <input
          type="number"
          id="monthly"
          name="monthly"
          value={budget.monthly}
          onChange={handleInput}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="e.g. 30000"
        />
      </div>

      <div className="bg-gray-100 p-4 rounded-md">
        <h4 className="font-medium text-gray-800">Your Budget Overview</h4>
        <p>Daily Budget: ₹{budget.daily || 'Not Set'}</p>
        <p>Monthly Budget: ₹{budget.monthly || 'Not Set'}</p>
      </div>
    </div>
  );
};

export default BudgetManager;
