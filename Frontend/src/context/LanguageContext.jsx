import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? storedLanguage : getDefaultLanguage();
  });

  function getDefaultLanguage() {
    const userLocale = navigator.language || navigator.userLanguage;
    return userLocale.startsWith("ar") ? "ar" : "en";
  }

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
    window.location.reload();
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
