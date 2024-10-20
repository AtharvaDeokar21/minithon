import React, { useState } from 'react';
import { DollarSign, AlertCircle } from 'react-feather'; // Icons for budget overview

const SavingGoals = () => {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [savedAmount, setSavedAmount] = useState('');

  // Handle form submission
  const addGoal = (e) => {
    e.preventDefault();
    const newGoal = {
      id: goals.length + 1,
      name: goalName,
      target: parseFloat(targetAmount),
      saved: parseFloat(savedAmount),
    };
    setGoals([...goals, newGoal]);
    setGoalName('');
    setTargetAmount('');
    setSavedAmount('');
  };

  // Calculate total saved from all goals
  const totalSaved = goals.reduce((acc, goal) => acc + goal.saved, 0);

  return (
    <div className="saving-goals">
      {/* Add New Goal Form */}
      <form onSubmit={addGoal} className="mb-4">
        <div className="mb-2">
          <label htmlFor="goalName" className="block text-sm font-medium text-gray-700">
            Goal Name
          </label>
          <input
            type="text"
            id="goalName"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g. New Laptop"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700">
            Target Amount
          </label>
          <input
            type="number"
            id="targetAmount"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g. 50000"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="savedAmount" className="block text-sm font-medium text-gray-700">
            Amount Saved
          </label>
          <input
            type="number"
            id="savedAmount"
            value={savedAmount}
            onChange={(e) => setSavedAmount(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g. 15000"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Goal
        </button>
      </form>

      {/* Display Goals with Progress Bars */}
      {goals.length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold mb-4">Your Saving Goals</h3>
          <ul>
            {goals.map((goal) => {
              const progress = (goal.saved / goal.target) * 100;
              return (
                <li key={goal.id} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">{goal.name}</span>
                    <span className="text-sm text-gray-600">{goal.saved} / {goal.target} INR</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`bg-indigo-600 h-4 rounded-full`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">You have no saving goals yet. Add a goal to start tracking!</p>
      )}
    </div>
  );
};

export default SavingGoals;
