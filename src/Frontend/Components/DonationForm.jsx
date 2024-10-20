import React, { useState } from 'react';
import './DonationForm.css';

const DonationForm = () => {
  const [activeLink, setActiveLink] = useState('donate'); // Track active link

  return (
    <div className="donation-form-page">
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

      <div className="donation-form">
        <h2>Food <span className="highlight">Donate</span></h2>
        <form>
          <label>
            Name:
            <input type="text" name="foodName" required />
          </label>
          <label>
            Meal type:
            <div>
              <label><input type="radio" name="mealType" value="Veg" required /> Veg</label>
              <label><input type="radio" name="mealType" value="Non-veg" required /> Non-veg</label>
            </div>
          </label>
          <label>
            Select the Category:
            <div className="category-images">
              <label>
                <input type="radio" name="foodCategory" value="Cooked" required />
                <img src="/images/cookfood.jpeg" alt="Cooked Food" className="category-image" />
              </label>
              <label>
                <input type="radio" name="foodCategory" value="Packed" required />
                <img src="/images/packfood.webp" alt="Packed Food" className="category-image" />
              </label>
            </div>
          </label>
          <label>
            Quantity (person):
            <input type="number" name="quantity" required min="1" />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Phone No:
            <input type="tel" name="phoneNo" required pattern="[0-9]{10}" />
          </label>
          <label>
            District:
            <select name="district" required>
              <option value="">Select District</option>
              <option value="Chennai">Chennai</option>
              <option value="Thiruvallur">Thiruvallur</option>
              <option value="Kanchipuram">Kanchipuram</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Address:
            <textarea name="address" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
