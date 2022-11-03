import React, { createContext, useContext, useState } from 'react';

type ContextProps = {
  apiData: any;
  setApiData: (data: any) => void;
};

type ProviderProps = {
  children: React.ReactNode;
  initialProps: any;
};

const defaultValues = {
  apiData: [{}],
  setApiData: (data: any) => {
    data;
  }
};

export const ApiDataContext = createContext<ContextProps>(defaultValues);

export default function ApiDataProvider({
  children,
  initialProps
}: ProviderProps) {
  const [apiData, setApiData] = useState(initialProps);

  return (
    <ApiDataContext.Provider value={{ apiData, setApiData }} {...initialProps}>
      {children}
    </ApiDataContext.Provider>
  );
}

export const useApiData = () => useContext(ApiDataContext);
