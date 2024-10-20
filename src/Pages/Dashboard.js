import React from 'react';
import ExpenseTracker from '../components/ExpenseTracker';
import BudgetManager from '../components/BudgetManager';
import SavingGoals from '../components/SavingGoals';
import FinanceReport from '../components/FinanceReport';
import BillPaymentCalendar from '../components/BillPaymentCalendar';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
            Personal Finance Dashboard
          </h1>
          <p className="mt-2 text-gray-600">Manage your expenses, budget, and savings efficiently.</p>
        </div>

        {/* Dashboard Cards - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Expense Tracker */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Expense Tracker</h2>
            <ExpenseTracker />
          </div>

          {/* Budget Manager */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Budget Management</h2>
            <BudgetManager />
          </div>

          {/* Saving Goals */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Saving Goals</h2>
            <SavingGoals />
          </div>

          {/* Financial Report */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial Report</h2>
            <FinanceReport />
          </div>

          {/* Bill Payment Calendar */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Bill Payment Calendar</h2>
            <BillPaymentCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
