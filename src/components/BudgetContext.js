// BudgetContext.js
import React, { createContext, useContext, useState } from 'react';

const BudgetContext = createContext();

export const useBudget = () => {
  return useContext(BudgetContext);
};

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState({ daily: 0, monthly: 0 });

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};