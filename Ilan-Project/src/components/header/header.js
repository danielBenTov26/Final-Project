import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header bg-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="display-4">חנות איל"ן</h1>
        <div className="language-selector">
          <button className="btn btn-primary mx-2" onClick={() => changeLanguage('en')}>
            English
          </button>
          <button className="btn btn-primary mx-2" onClick={() => changeLanguage('he')}>
            עברית
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
