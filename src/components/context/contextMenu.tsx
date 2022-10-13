import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';

const defaultValues = {
  state: false,
  setStatusMenu: (state: boolean) => {
    state;
  }
};

interface ContextProps {
  state: boolean;
  setStatusMenu: (state: boolean) => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ContextMenu = createContext<ContextProps>(defaultValues);

export default function MenuProvider({ children }: ModalProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState(defaultValues.state);

  const router = useRouter();

  const setStatusMenu = (state: boolean) => {
    if (window.innerWidth > 1024) return;

    setState(state);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      if (window.innerWidth > 1024) return;

      setStatusMenu(false);
    });

    return () =>
      router.events.off('routeChangeStart', () => {
        if (window.innerWidth > 1024) return;

        setStatusMenu(false);
      });
  });

  return (
    <ContextMenu.Provider value={{ state, setStatusMenu }}>
      {children}
    </ContextMenu.Provider>
  );
}

export const useMenu = () => useContext(ContextMenu);
