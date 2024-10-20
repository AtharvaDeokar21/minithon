import React, { useEffect } from 'react';
import ExpenseTracker from '../components/ExpenseTracker';
import SavingGoals from '../components/SavingGoals';
import FinanceReport from '../components/FinanceReport';
import BudgetManager from '../components/BudgetManager';
import BillPaymentCalendar from '../components/BillPaymentCalendar';

const Dashboard = () => {
  useEffect(() => {
    // Automatically moves the slider for Rewards Section
    const intervalId = setInterval(() => {
      const slider = document.getElementById("reward-slider");
      if (slider) {
        const max = parseInt(slider.max);
        let newValue = (parseInt(slider.value) + 1) % (max + 1);  // Moves the slider automatically
        slider.value = newValue;

        // Trigger confetti when the slider reaches the maximum value
        if (newValue === max) {
          createConfetti();  // Call confetti function
        }
      }
    }, 2000);  // Adjust the interval as needed (every 2 seconds)

    return () => clearInterval(intervalId);  // Clear the interval when component unmounts
  }, []);

  // Function to create confetti
  const createConfetti = () => {
    // Create 100 confetti elements
    for (let i = 0; i < 100; i++) {
      const confettiElement = document.createElement('div');
      confettiElement.classList.add('confetti');
  
      // Random position and animation duration for each confetti
      confettiElement.style.position = 'absolute';
      confettiElement.style.width = '10px';
      confettiElement.style.height = '10px';
      confettiElement.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confettiElement.style.left = `${Math.random() * 100}vw`;
      confettiElement.style.top = `${Math.random() * 100}vh`;
      confettiElement.style.animation = 'fall linear infinite';
      confettiElement.style.animationDuration = `${Math.random() * 2 + 3}s`;
  
      // Append confetti to the body
      document.body.appendChild(confettiElement);
  
      // Remove the confetti after the animation ends
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
          <h1 className="text-3xl lg:text-5xl font-bold text-[#000000]">
            Personal Finance Dashboard
          </h1>
          <p className="mt-2 text-[#FFFFFF]">Manage your expenses, budget, and savings efficiently.</p>
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Expense Tracker */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#000000] mb-4">Expense Tracker</h2>
            <ExpenseTracker />
          </div>

          {/* Saving Goals with Graphs */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#000000] mb-4">Saving Goals</h2>
            <SavingGoals />  {/* Displays two graphs based on user data */}
          </div>

          {/* Rewards & Financial Report Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#000000] mb-4">Rewards & Financial Report</h2>

            {/* Rewards Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Rewards Progress</h3>
              <p>Points Earned: 80 / 100</p>
              <input
                type="range"
                id="reward-slider"
                min="0"
                max="100"
                value="80"
                className="w-full mt-2"
                disabled
              />
            </div>

            {/* Financial Report */}
            <FinanceReport />  {/* Display the financial report chart */}
          </div>

          {/* Budget Manager */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#000000] mb-4">Budget Manager</h2>
            <BudgetManager />
          </div>

          {/* Bill Payment Calendar */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#000000] mb-4">Bill Payment Calendar</h2>
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






















// import React from 'react';
// import ExpenseTracker from '../components/ExpenseTracker';
// import BudgetManager from '../components/BudgetManager';
// import SavingGoals from '../components/SavingGoals';
// import FinanceReport from '../components/FinanceReport';
// import BillPaymentCalendar from '../components/BillPaymentCalendar';

// const Dashboard = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="container mx-auto">
//         {/* Page Title */}
//         <div className="text-center mb-10">
//           <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
//             Personal Finance Dashboard
//           </h1>
//           <p className="mt-2 text-gray-600">Manage your expenses, budget, and savings efficiently.</p>
//         </div>

//         {/* Dashboard Cards - Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Expense Tracker */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Expense Tracker</h2>
//             <ExpenseTracker />
//           </div>

//           {/* Budget Manager */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Budget Management</h2>
//             <BudgetManager />
//           </div>

//           {/* Saving Goals */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Saving Goals</h2>
//             <SavingGoals />
//           </div>

//           {/* Financial Report */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial Report</h2>
//             <FinanceReport />
//           </div>

//           {/* Bill Payment Calendar */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Bill Payment Calendar</h2>
//             <BillPaymentCalendar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
