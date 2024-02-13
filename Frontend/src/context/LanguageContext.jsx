import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getDefaultLanguage());

  function getDefaultLanguage() {
    const userLocale = navigator.language || navigator.userLanguage;

    if (userLocale.startsWith("ar")) {
      return "ar";
    } else {
      return "en";
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);