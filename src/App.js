import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import ExpenseTracker from './components/ExpenseTracker';
import { BudgetProvider } from './components/BudgetContext';
import SavingGoals from './components/SavingGoals';
import BillPaymentCalendar from './components/BillPaymentCalendar';


const App = () => {
  return (
    <BudgetProvider>
    <Router>
      <div>
        <Navbar />  {/* Navbar and Total Spent/Bonus Points will appear on all pages */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expense-tracker" element={<ExpenseTracker />} />
            <Route path="/saving-goals" element={<SavingGoals />} />
            <Route path="/bill-payment" element={<BillPaymentCalendar />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
    </BudgetProvider>
  );
};


export default App;
