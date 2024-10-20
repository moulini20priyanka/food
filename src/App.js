import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Frontend/Components/Dashboard';
import Signup from './Frontend/Components/Signup';
import DonationForm from './Frontend/Components/DonationForm';
import Profile from './Frontend/Components/Profile'; // Import the Profile component

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isSignedIn ? <Navigate to="/dashboard" replace /> : <Navigate to="/signup" replace />} 
        />
        <Route path="/signup" element={<Signup setIsSignedIn={setIsSignedIn} />} />
        <Route path="/dashboard" element={<Dashboard isSignedIn={isSignedIn} />} />
        <Route path="/donate" element={<DonationForm />} /> {/* Allow access to donation form without sign-in */}
        <Route path="/profile" element={<Profile />} /> {/* Add the Profile route */}
      </Routes>
    </Router>
  );
};

export default App;
