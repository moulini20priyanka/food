import React, { useState } from 'react';
import './Profile.css'; // Make sure to import your CSS file

const Profile = () => {
  const [activeLink, setActiveLink] = useState('profile'); // Track active link

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>Food Waste</h1>
          <nav>
            <a href="/dashboard" className={activeLink === 'dashboard' ? 'active' : ''} onClick={() => setActiveLink('dashboard')}>Dashboard</a>
            <a href="#maps" className={activeLink === 'maps' ? 'active' : ''} onClick={() => setActiveLink('maps')}>Maps</a>
            <a href="/profile" className={activeLink === 'profile' ? 'active' : ''} onClick={() => setActiveLink('profile')}>Profile</a>
          </nav>
        </div>
      </header>

      <div className="profile-container">
        <div className="profile-header">
          <img src="/images/profile.avif" alt="Profile" className="profile-image" />
        </div>
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-location">New York, United States</p>
        <p className="profile-role">Food Donation Volunteer</p>
        <p className="profile-organization">Volunteer at FoodShare - New York</p>
        <div className="profile-stats">
          <div className="stat">
            <h3>120</h3> {/* Number of donations made */}
            <p>Donations Made</p>
          </div>
          <div className="stat">
            <h3>250</h3> {/* Number of people helped */}
            <p>People Helped</p>
          </div>
          <div className="stat">
            <h3>15</h3> {/* Number of food drives participated */}
            <p>Food Drives</p>
          </div>
        </div>
        <button className="show-more-button">Show More</button>
      </div>
    </>
  );
};

export default Profile;
