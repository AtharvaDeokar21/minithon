import React, { useState } from 'react';

const FinanceReport = ({ totalSpent }) => {
  const [emergencyFund, setEmergencyFund] = useState(0); // State for emergency fund

  const handleEmergencyFundChange = (e) => {
    setEmergencyFund(e.target.value);
  };

  const areasToImprove = ['Entertainment', 'Dining Out']; // Hardcoded for now; you can make it dynamic later

  return (
    <div className="finance-report p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Monthly Financial Wellness Report</h3>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h4 className="font-medium text-gray-800">Total Spent</h4>
        <p>₹{totalSpent}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h4 className="font-medium text-gray-800">Emergency Fund</h4>
        <input
          type="number"
          value={emergencyFund}
          onChange={handleEmergencyFundChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Set your emergency fund (INR)"
        />
      </div>

      <div className="bg-gray-100 p-4 rounded-md">
        <h4 className="font-medium text-gray-800">Areas to Improve</h4>
        <ul>
          {areasToImprove.map((area, index) => (
            <li key={index} className="text-gray-600">
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinanceReport;
