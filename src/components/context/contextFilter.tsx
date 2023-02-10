import React, { createContext, useContext, useState } from 'react';

export interface ISelectedFilters {
  type: string;
  category: string;
  value: string;
}

interface IContext {
  selectedFilters: ISelectedFilters[];
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<ISelectedFilters[] | []>
  >;
}

const Context = createContext<IContext>({} as IContext);

const ContextFilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedFilters, setSelectedFilters] = useState<
    ISelectedFilters[] | []
  >([]);

  return (
    <Context.Provider value={{ selectedFilters, setSelectedFilters }}>
      {children}
    </Context.Provider>
  );
};

export default ContextFilterProvider;

export const useContextFilter = () => useContext(Context);
