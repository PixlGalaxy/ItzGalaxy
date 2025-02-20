import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Resources from './pages/Resources';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* 404 */}
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
};

export default App;
