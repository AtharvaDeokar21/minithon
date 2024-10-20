import React from 'react';
import { useBudget } from './BudgetContext';
import { DollarSign, AlertCircle } from 'react-feather'; // Icons for budget overview

const BudgetManager = () => {
  const { budget, setBudget } = useBudget();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBudget((prevBudget) => ({
      ...prevBudget,
      [name]: value,
    }));
  };

  const currentSpend = 45000; // Example current spend
  const totalSaved = 0; // Update this with actual total saved logic

  const remaining = budget.monthly - currentSpend + totalSaved; // Adjust remaining budget

  return (
    <div className="budget-manager p-6 bg-white rounded-lg shadow-md">
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
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. 30000"
        />
      </div>

      {/* Budget Overview Section */}
      <div className="bg-gray-100 p-4 rounded-md mt-4">
  <h4 className="font-medium text-gray-800 flex items-center gap-2">
    <DollarSign size={20} /> Your Budget Overview
  </h4>
  <div className="mt-2 space-y-2">
    <p>Daily Budget: ₹{budget.daily || 'Not Set'}</p>
    <p>Monthly Budget: ₹{budget.monthly || 'Not Set'}</p>
    <p>Current Spend: ₹{currentSpend}</p>
    <p>Remaining: ₹{remaining}</p>
  </div>

  {/* Progress Bar Container */}
  <div className="relative w-full bg-gray-200 rounded-full h-4 mt-2 overflow-hidden">
    <div
      className={`bg-green-500 h-full rounded-full`}
      style={{ width: `${budget.monthly ? Math.min((currentSpend / budget.monthly) * 100, 100) : 0}%` }}
    ></div>
  </div>

  {currentSpend > budget.monthly * 0.9 && (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4 rounded-md">
      <div className="flex items-center">
        <AlertCircle size={16} className="text-red-500 mr-2" />
        <p className="text-red-700">
          You're close to exceeding your monthly budget!
        </p>
      </div>
    </div>
  )}
</div>

    </div>
  );
};

export default BudgetManager;
