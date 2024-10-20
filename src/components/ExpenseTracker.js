import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expenses.length + 1,
      description: description,
      amount: parseFloat(amount),
    };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
  };

  return (
    <div className="expense-tracker">
      <form onSubmit={addExpense} className="mb-4">
        <div className="mb-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Expense Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g. Groceries"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount (INR)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="e.g. 200"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Add Expense
        </button>
      </form>

      {expenses.length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Expenses</h3>
          <ul>
            {expenses.map((expense) => (
              <li key={expense.id} className="mb-2">
                <span className="text-gray-800">{expense.description}:</span>{' '}
                <span className="text-gray-600">₹{expense.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">No expenses recorded yet.</p>
      )}
    </div>
  );
};

export default ExpenseTracker;
