import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; // Make sure this path is correct

const Signup = ({ setIsSignedIn }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:5000/signup', {
        fullName,
        email,
        password
      });

      if (response.status === 201) {
        console.log('Sign up successful!');
        setIsSignedIn(true);
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.error('Sign-up error:', error);
      }
    }
  };

  return (
    <div className="signup-page">
      <img src="/images/bg.jpg" alt="Background" className="bg" />
      <div className="signup-content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
