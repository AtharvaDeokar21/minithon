import React from 'react';

const FinanceReport = () => {
  const expenseData = {
    totalSpent: 12500,
    emergencyFund: 5000,
    areasToImprove: ['Entertainment', 'Dining Out'],
  };

  return (
    <div className="finance-report">
      <h3 className="text-lg font-semibold mb-4">Monthly Financial Wellness Report</h3>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h4 className="font-medium text-gray-800">Total Spent</h4>
        <p>₹{expenseData.totalSpent}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h4 className="font-medium text-gray-800">Emergency Fund</h4>
        <p>₹{expenseData.emergencyFund}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-md">
        <h4 className="font-medium text-gray-800">Areas to Improve</h4>
        <ul>
          {expenseData.areasToImprove.map((area, index) => (
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
