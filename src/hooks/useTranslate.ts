import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export function useTranslate(englishString: JSX.Element, portugueseString: JSX.Element) {
  const {language} = useContext(LanguageContext);

  if(language === 'en') {
    return englishString;
  }

  return portugueseString;
}
