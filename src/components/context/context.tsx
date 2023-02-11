import React, { createContext, useContext, useState } from 'react';

export interface Product {
  title: string;
  codigo: string;
  img: string | null;
  slug: string;
  quantidade: number;
  uri: string;
  volts: string;
}

const defaultValues = {
  budget: [],
  addBudget: (produto: Product) => {
    produto;
  },
  removeBudget: (codigo: string) => {
    codigo;
  },
  clear: () => {
    return;
  }
};

interface ContextProps {
  budget: Product[];
  addBudget: (produto: Product) => void;
  removeBudget: (codigo: string) => void;
  clear: () => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ContextBudget = createContext<ContextProps>(defaultValues);

export default function BudgetProvider({ children }: ModalProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [budget, setBudget] = useState<Product[]>(defaultValues.budget);

  const addBudget = (produto: Product) => {
    setBudget((prev) => {
      const array = [...prev];
      const itemIndex = array.findIndex(
        ({ codigo }) => produto.codigo === codigo
      );

      if (itemIndex === -1) {
        return [...array, produto];
      }

      array[itemIndex].quantidade = produto.quantidade;

      return array;
    });
  };

  const clear = () => {
    setBudget([]);
  };

  const removeBudget = (codigo: string) => {
    setBudget((prev) => {
      const array = prev.filter((item) => item.codigo !== codigo);
      return array;
    });
  };

  return (
    <ContextBudget.Provider value={{ budget, addBudget, removeBudget, clear }}>
      {children}
    </ContextBudget.Provider>
  );
}

export const useBudget = () => useContext(ContextBudget);
