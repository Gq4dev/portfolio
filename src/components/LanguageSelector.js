import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        <span className="flag">🇺🇸</span> EN
      </button>
      <button
        className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
        onClick={() => changeLanguage('es')}
        aria-label="Cambiar a Español"
      >
        <span className="flag">🇦🇷</span> ES
      </button>
    </div>
  );
};

export default LanguageSelector;