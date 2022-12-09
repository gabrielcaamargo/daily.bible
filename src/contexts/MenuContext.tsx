import { createContext, useState } from 'react';

const MenuDefaultValues = {
  isMenuOpen: false,
  setIsMenuOpen: () => {}
};

export const MenuContext = createContext<MenuContextInterface>(MenuDefaultValues);

interface MenuContextInterface {
  isMenuOpen: boolean;
  setIsMenuOpen: (setState: boolean) => void
}

interface MenuContextProviderProps {
  children: React.ReactNode
}

export default function MenuContextProvider({children}: MenuContextProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
      {children}
    </MenuContext.Provider>
  );
}
