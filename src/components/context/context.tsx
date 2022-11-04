import React, { createContext, useContext, useState, useEffect } from 'react';

interface Product {
  title: string;
  codigo: string;
  img: string;
  slug: string;
  quantidade: number;
}

const defaultValues = {
  budget: [],
  addBudget: (produto: Product) => {
    produto;
  }
};

interface ContextProps {
  budget: Product[];
  addBudget: (produto: Product) => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ContextBudget = createContext<ContextProps>(defaultValues);

export default function BudgetProvider({ children }: ModalProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [budget, setBudget] = useState<Product[]>(defaultValues.budget);

  const addBudget = (produto: Product) => {
    console.log('context', produto.quantidade);

    setBudget((prev) => {
      const array = [...prev];
      const itemIndex = array.findIndex(({ slug }) => produto.slug === slug);

      console.log(itemIndex);

      if (itemIndex === -1) {
        return [produto];
      }

      array[itemIndex].quantidade = produto.quantidade;

      return array;
    });
  };

  useEffect(() => console.log(budget), [budget]);

  return (
    <ContextBudget.Provider value={{ budget, addBudget }}>
      {children}
    </ContextBudget.Provider>
  );
}

export const useBudget = () => useContext(ContextBudget);
