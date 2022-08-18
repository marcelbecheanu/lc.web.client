import { createContext, useState, useLayoutEffect } from 'react';
import langData from './langs';

const LangContext = createContext({
  lang: '',
  currentLangData: {},
  switchLang: () => {},
});

function LangProvider({ children }){

  const [ lang, setLang ] = useState(window.localStorage.getItem('lang') || "pt");
  
  useLayoutEffect(() => {
    const selectedLang = window.localStorage.getItem('lang');
    if (selectedLang) {
      setLang(selectedLang);
    } 
  }, [lang])

  const switchLang = (ln) => {
    setLang(ln);
    window.localStorage.setItem('lang', ln);
  };

  return (
    <LangContext.Provider value={{ lang, switchLang, currentLangData: langData[lang]}}>
      {children}
    </LangContext.Provider>
  );
}

export { LangContext, LangProvider, langData };