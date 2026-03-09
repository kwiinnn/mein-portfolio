import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  lang: 'en' | 'de';
  setLang: (lang: 'en' | 'de') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<'en' | 'de'>(() => {
    const saved = localStorage.getItem('language');
    return (saved as 'en' | 'de') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', lang);
  }, [lang]);

  const setLang = (newLang: 'en' | 'de') => setLangState(newLang);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { LanguageProvider, useLanguage };
