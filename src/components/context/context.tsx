import React, { createContext, useContext, useState } from 'react';

const defaultValues = {
  state: [],
  SaveStorage: (code: number) => {
    code;
  }
};

interface ContextProps {
  state: number[];
  SaveStorage: (code: number) => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ContextBudget = createContext<ContextProps>(defaultValues);

export default function BudgetProvider({ children }: ModalProviderProps) {
  const [state, setState] = useState(defaultValues.state);

  const SaveStorage = (code: number) => {
    return localStorage.setItem('ProductsBudget', JSON.stringify(code));
  };

  return (
    <ContextBudget.Provider value={{ state, SaveStorage }}>
      {children}
    </ContextBudget.Provider>
  );
}

export const useBudget = () => useContext(ContextBudget);
