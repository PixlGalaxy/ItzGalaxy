import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Resources from './pages/Resources';
import DurazznoApp from './pages/DurazznoApp';
import Pixl from './pages/Pixl';
import PixlTOS from './pages/Pixltos';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/durazznoapp" element={<DurazznoApp />} />
            <Route path="/pixl" element={<Pixl />} />
            <Route path="/pixl-tos" element={<PixlTOS />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
