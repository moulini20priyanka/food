import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState('dashboard'); // Track active link
  const navigate = useNavigate();

  const handleDonateNowClick = () => {
    navigate('/donate'); // Navigate directly to the donation form
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div className="header-content">
          <h1>Food Waste</h1>
          <nav>
            <a href="#dashboard" className={activeLink === 'dashboard' ? 'active' : ''} onClick={() => setActiveLink('dashboard')}>Dashboard</a>
            <a href="#maps" className={activeLink === 'maps' ? 'active' : ''} onClick={() => setActiveLink('maps')}>Maps</a>
            <a href="/profile" className={activeLink === 'profile' ? 'active' : ''} onClick={() => setActiveLink('profile')}>Profile</a>
          </nav>
        </div>
      </header>

      <section className="feed">
        <div className="feed-container">
          <img src="/images/dashboard1.png" alt="Feed" className="feed-image" />
          <div className="feed-content">
            <h3>Join Us in Making a Difference</h3>
            <p>Your donation will be immediately collected and sent to needy people.</p>
            <button className="donate-button" onClick={handleDonateNowClick}>Donate Now</button>
          </div>
        </div>
      </section>

      <section className="image-section">
        <div className="works">
          <h2>Our Works</h2>
          <p>"Look what we can do together."</p>
          <div className="image-row">
            <img src="/images/work1.jpg" alt="Our Works" className="work-image" />
            <img src="/images/work2.jpeg" alt="Our Works" className="work-image" />
            <img src="/images/work3.jpg" alt="Our Works" className="work-image" />
          </div>
        </div>
        <div className="door-pickup">
          <h2>DOOR PICKUP</h2>
          <p>"Your donation will be immediately collected and sent to needy people."</p>
          <img src="/images/Delivery.gif" alt="Delivery" className="delivery" />
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Food Waste Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
