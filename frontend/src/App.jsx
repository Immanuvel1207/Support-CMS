import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Dashboard from '../pages/Dashboard';
import Tickets from '../pages/Tickets';
import Contact from '../pages/Contact';
import './App.css'; // Make sure to import the global styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          {/* Redirect from root to /dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />

          {/* Main routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all for 404s */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
