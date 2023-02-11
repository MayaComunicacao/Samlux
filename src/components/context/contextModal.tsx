import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';

const defaultValues = {
  state: false,
  setStatusModal: (state: boolean) => {
    state;
  }
};

interface ContextProps {
  state: boolean;
  setStatusModal: (state: boolean) => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ContextModal = createContext<ContextProps>(defaultValues);

export default function ContextModalProvider({ children }: ModalProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState(defaultValues.state);

  const router = useRouter();

  const setStatusModal = (state: boolean) => {
    setState(state);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setStatusModal(false);
    });

    return () =>
      router.events.off('routeChangeStart', () => {
        setStatusModal(false);
      });
  });

  return (
    <ContextModal.Provider value={{ state, setStatusModal }}>
      {children}
    </ContextModal.Provider>
  );
}

export const useModal = () => useContext(ContextModal);
