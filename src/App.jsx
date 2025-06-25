import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/common/Header';
import HomePage from './pages/HomePage';
import FAQPage from './pages/FAQPage';
import NewsPage from './pages/NewsPage';
import FeaturePage from './pages/FeaturePage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/common/Footer';
import ScrollToSection from './components/common/ScrollToSection';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <ScrollToSection />
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/features" element={<FeaturePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
