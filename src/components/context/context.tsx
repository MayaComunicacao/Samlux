import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  title: string;
  codigo: string;
  img: string;
  slug: string;
  quantidade: number;
  uri: string;
}

const defaultValues = {
  budget: [],
  addBudget: (produto: Product) => {
    produto;
  },
  removeBudget: (slug: string) => {
    slug;
  }
};

interface ContextProps {
  budget: Product[];
  addBudget: (produto: Product) => void;
  removeBudget: (slug: string) => void;
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
      const itemIndex = array.findIndex(({ slug }) => produto.slug === slug);

      if (itemIndex === -1) {
        return [...array, produto];
      }

      array[itemIndex].quantidade = produto.quantidade;

      return array;
    });
  };

  const removeBudget = (slug: string) => {
    setBudget((prev) => {
      const array = prev.filter((item) => item.slug !== slug);
      return array;
    });
  };

  return (
    <ContextBudget.Provider value={{ budget, addBudget, removeBudget }}>
      {children}
    </ContextBudget.Provider>
  );
}

export const useBudget = () => useContext(ContextBudget);
