import React, { useState } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // No functional behavior, UI only
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    // No navigation, UI only
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">🚌</span>
            <h1 className="logo-name">BusBooking</h1>
          </div>
        </div>
        <nav className="navbar">
          <a href="#home" className="nav-link" onClick={handleNavClick}>
            Home
          </a>
          <a href="#bookings" className="nav-link" onClick={handleNavClick}>
            Bookings
          </a>
          <a href="#profile" className="nav-link" onClick={handleNavClick}>
            Profile
          </a>
          <a href="#logout" className="nav-link logout-link" onClick={handleNavClick}>
            Logout
          </a>
        </nav>
      </header>

      {/* Main Section with Background */}
      <div className="main-section">
        <div className="background-overlay"></div>

        {/* Search Card */}
        <div className="search-card">
          <h2 className="search-title">Book Your Bus Ticket</h2>

          <form className="search-form" onSubmit={handleSearch}>
            {/* From Input */}
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="from" className="field-label">
                  <span className="field-icon">📍</span> From
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  value={searchData.from}
                  onChange={handleInputChange}
                  placeholder="Pickup location"
                  className="input-field"
                  required
                />
              </div>

              {/* Swap Button */}
              <button type="button" className="swap-button" title="Swap locations">
                ⇅
              </button>

              {/* To Input */}
              <div className="form-field">
                <label htmlFor="to" className="field-label">
                  <span className="field-icon">📍</span> To
                </label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  value={searchData.to}
                  onChange={handleInputChange}
                  placeholder="Destination"
                  className="input-field"
                  required
                />
              </div>
            </div>

            {/* Date and Passengers Row */}
            <div className="form-row">
              {/* Date Picker */}
              <div className="form-field">
                <label htmlFor="date" className="field-label">
                  <span className="field-icon">📅</span> Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={searchData.date}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>

              {/* Passengers Dropdown */}
              <div className="form-field">
                <label htmlFor="passengers" className="field-label">
                  <span className="field-icon">👥</span> Passengers
                </label>
                <select
                  id="passengers"
                  name="passengers"
                  value={searchData.passengers}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} Passenger{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button type="submit" className="search-button">
              Search Buses
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
