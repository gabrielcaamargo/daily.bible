import { createContext, useState } from 'react';

interface LanguageInterface {
  language: string;
  setLanguage: (setState: string) => void
}

const LanguageContextDefaultValues: LanguageInterface = {
  language: 'en',
  setLanguage: (setState: string) => {}
};

export const LanguageContext = createContext<LanguageInterface>(LanguageContextDefaultValues);

interface LanguageContextProviderProps {
  children: React.ReactNode;
}

export default function LanguageContextProvider({children}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
}
