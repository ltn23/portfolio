import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FloatingChatbot from './components/FloatingChatbot';

const App = () => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#F97316' } }}>
      <Router>
        <div className="min-h-screen bg-space-dark">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <FloatingChatbot />
        </div>
      </Router>
    </ConfigProvider>
  );
};

export default App;