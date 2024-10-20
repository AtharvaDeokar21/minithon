import React, { useEffect, useState } from 'react';
import SavingGoals from '../components/SavingGoals';
import FinanceReport from '../components/FinanceReport';
import BudgetManager from '../components/BudgetManager';
import BillPaymentCalendar from '../components/BillPaymentCalendar';
import ExpenseTracker from '../components/ExpenseTracker';

const Dashboard = () => {
  const [pointsEarned, setPointsEarned] = useState(0);

  useEffect(() => {
    const duration = 5000;  // 5 seconds for complete slider movement
    const maxPoints = 100;
    const intervalTime = duration / maxPoints;  // Interval in milliseconds (50ms for each point)

    const intervalId = setInterval(() => {
      const slider = document.getElementById("reward-slider");
      if (slider) {
        const currentValue = parseInt(slider.value);
        const newValue = currentValue + 1;

        if (newValue <= maxPoints) {
          slider.value = newValue;
          setPointsEarned(newValue);

          if (newValue === maxPoints) {
            createConfetti();  // Call confetti function
            clearInterval(intervalId);  // Stop the interval when slider is complete
          }
        }
      }
    }, intervalTime);

    return () => clearInterval(intervalId);  // Clear the interval when component unmounts
  }, []);

  // Function to create confetti
  const createConfetti = () => {
    for (let i = 0; i < 100; i++) {
      const confettiElement = document.createElement('div');
      confettiElement.classList.add('confetti');

      confettiElement.style.position = 'absolute';
      confettiElement.style.width = '10px';
      confettiElement.style.height = '10px';
      confettiElement.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confettiElement.style.left = `${Math.random() * 100}vw`;
      confettiElement.style.top = `${Math.random() * 100}vh`;
      confettiElement.style.animation = 'fall linear infinite';
      confettiElement.style.animationDuration = `${Math.random() * 2 + 3}s`;

      document.body.appendChild(confettiElement);

      setTimeout(() => {
        confettiElement.remove();
      }, 5000);
    }
  };

  return (
    <div className="bg-[#333333] min-h-screen p-6">
      <div className="container mx-auto">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#FFFFFF]">
            Personal Finance Dashboard
          </h1>
          <p className="mt-2 text-[#B6B695]">Manage your expenses, budget, and savings efficiently.</p>
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Saving Goals with Graphs */}
          <div className="bg-[#1A796D] shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4">Saving Goals</h2>
            <SavingGoals />
          </div>

          {/* Rewards & Financial Report Section */}
          <div className="bg-[#1A796D] shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4">Rewards & Financial Report</h2>
            {/* Rewards Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#FFFFFF]">Rewards Progress</h3>
              <p className="text-[#B6B695]">Points Earned: {pointsEarned} / 100</p>
              <input
                type="range"
                id="reward-slider"
                min="0"
                max="100"
                value={pointsEarned}
                className="w-full mt-2"
                disabled
              />
            </div>
            {/* Financial Report */}
            <FinanceReport />
          </div>

          {/* Budget Manager */}
          <div className="bg-[#1A796D] shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4">Budget Manager</h2>
            <BudgetManager />
          </div>

          {/* Expense Tracker */}
          <div className="bg-[#1A796D] shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4">Expense Tracker</h2>
            <ExpenseTracker />
          </div>

          {/* Bill Payment Calendar */}
          <div className="bg-[#1A796D] shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3 mx-auto transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4">Bill Payment Calendar</h2>
            <BillPaymentCalendar />
          </div>
        </div>
      </div>

      {/* Inline CSS for Confetti */}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
          }
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: hsl(0, 100%, 50%);
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
