import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { useBudget } from './BudgetContext';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseTracker = () => {
  const { budget } = useBudget();
  const [expenses, setExpenses] = useState({ food: 0, rent: 0, entertainment: 0 });
  const [expenseList, setExpenseList] = useState([]); // State to hold the list of expenses
  const [newExpense, setNewExpense] = useState({ category: '', amount: '' });

  const totalSpent = Object.values(expenses).reduce((acc, curr) => acc + curr, 0);
  const remainingBudget = budget.monthly - totalSpent;

  // Create chart data
  const data = {
    labels: ['Spent', 'Remaining'],
    datasets: [
      {
        data: [totalSpent, remainingBudget],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (newExpense.category && newExpense.amount) {
      const amount = parseFloat(newExpense.amount);

      // Update expenses
      setExpenses((prev) => ({
        ...prev,
        [newExpense.category]: (prev[newExpense.category] || 0) + amount,
      }));

      // Add to expense list
      setExpenseList((prev) => [
        ...prev,
        { category: newExpense.category, amount },
      ]);

      // Reset form
      setNewExpense({ category: '', amount: '' });
    }
  };

  // Alert for budget nearing finish
  useEffect(() => {
    if (totalSpent >= budget.monthly) {
      alert('You have reached your budget limit!');
    } else if (remainingBudget < budget.monthly * 0.2) { // 20% threshold
      alert('Warning: You are nearing your budget limit!');
    }
  }, [totalSpent, budget.monthly, remainingBudget]);

  return (
    <div className="expense-tracker">
      <h3 className="text-lg font-semibold mb-4">Expense Tracker</h3>
      
      {/* Form for adding daily expenses */}
      <form onSubmit={handleExpenseSubmit} className="mb-4">
        <div className="flex space-x-4 mb-2">
          <select
            name="category"
            value={newExpense.category}
            onChange={handleExpenseChange}
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="entertainment">Entertainment</option>
            {/* Add more categories as needed */}
          </select>

          <input
            type="number"
            name="amount"
            value={newExpense.amount}
            onChange={handleExpenseChange}
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Amount (INR)"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Expense
        </button>
      </form>

      {/* Budget Overview Chart */}
      <h4 className="font-medium text-gray-800 mb-2">Budget Overview</h4>
      <Pie data={data} />

      {/* Display Total Spent */}
      <div className="mt-4">
        <p className="font-medium">Total Spent: ₹{totalSpent}</p>
        <p className="text-red-600">Remaining Budget: ₹{remainingBudget}</p>
      </div>

      {/* Display List of Expenses */}
      <div className="mt-4">
        <h4 className="font-medium mb-2">Expense List</h4>
        <ul className="list-disc pl-5">
          {expenseList.map((expense, index) => (
            <li key={index}>
              {expense.category}: ₹{expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
