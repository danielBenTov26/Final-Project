import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import '@fontsource/rubik';


const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set direction (LTR or RTL) based on selected language
    document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <Router>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
