import React, { useState } from 'react';
import '../styles/BusResultsPage.css';

const BusResultsPage = () => {
  const [filters, setFilters] = useState({
    busType: [],
    departureTime: [],
    priceRange: [0, 5000],
  });

  // Dummy bus data
  const busesData = [
    {
      id: 1,
      name: 'Shree Travels',
      type: 'AC',
      departureTime: '08:30 AM',
      arrivalTime: '04:15 PM',
      duration: '7h 45m',
      seatsAvailable: 12,
      price: 850,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Royal Express',
      type: 'Sleeper',
      departureTime: '09:00 PM',
      arrivalTime: '06:30 AM',
      duration: '9h 30m',
      seatsAvailable: 5,
      price: 1200,
      rating: 4.2,
    },
    {
      id: 3,
      name: 'City Comfort',
      type: 'AC',
      departureTime: '10:15 AM',
      arrivalTime: '06:00 PM',
      duration: '7h 45m',
      seatsAvailable: 20,
      price: 900,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Budget Tours',
      type: 'Non-AC',
      departureTime: '07:00 AM',
      arrivalTime: '02:30 PM',
      duration: '7h 30m',
      seatsAvailable: 8,
      price: 500,
      rating: 3.8,
    },
    {
      id: 5,
      name: 'Premium Travels',
      type: 'AC',
      departureTime: '02:00 PM',
      arrivalTime: '10:30 PM',
      duration: '8h 30m',
      seatsAvailable: 15,
      price: 1100,
      rating: 4.6,
    },
    {
      id: 6,
      name: 'Night Rider',
      type: 'Seater',
      departureTime: '11:00 PM',
      arrivalTime: '08:00 AM',
      duration: '9h',
      seatsAvailable: 18,
      price: 650,
      rating: 4.1,
    },
  ];

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'busType') {
      setFilters({
        ...filters,
        busType: filters.busType.includes(value)
          ? filters.busType.filter((item) => item !== value)
          : [...filters.busType, value],
      });
    } else if (filterType === 'departureTime') {
      setFilters({
        ...filters,
        departureTime: filters.departureTime.includes(value)
          ? filters.departureTime.filter((item) => item !== value)
          : [...filters.departureTime, value],
      });
    }
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setFilters({
      ...filters,
      priceRange: [0, value],
    });
  };

  const handleSelectSeats = (e) => {
    e.preventDefault();
    // No functional behavior, UI only
  };

  return (
    <div className="bus-results-page">
      {/* Header */}
      <header className="results-header">
        <div className="header-content">
          <h1 className="results-title">🚌 Search Results</h1>
          <p className="results-subtitle">
            Showing buses from City A to City B on April 23, 2026
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="results-container">
        {/* Left Sidebar - Filters */}
        <aside className="filters-sidebar">
          <h2 className="filters-title">Filters</h2>

          {/* Bus Type Filter */}
          <div className="filter-group">
            <h3 className="filter-heading">Bus Type</h3>
            <div className="filter-options">
              {['AC', 'Non-AC', 'Sleeper', 'Seater'].map((type) => (
                <label key={type} className="filter-checkbox">
                  <input
                    type="checkbox"
                    value={type}
                    checked={filters.busType.includes(type)}
                    onChange={() => handleFilterChange('busType', type)}
                  />
                  <span className="checkbox-label">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Departure Time Filter */}
          <div className="filter-group">
            <h3 className="filter-heading">Departure Time</h3>
            <div className="filter-options">
              {['Early Morning (5-9 AM)', 'Morning (9 AM-12 PM)', 'Afternoon (12-6 PM)', 'Evening (6 PM-12 AM)', 'Night (12 AM-5 AM)'].map((time) => (
                <label key={time} className="filter-checkbox">
                  <input
                    type="checkbox"
                    value={time}
                    checked={filters.departureTime.includes(time)}
                    onChange={() => handleFilterChange('departureTime', time)}
                  />
                  <span className="checkbox-label">{time}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-group">
            <h3 className="filter-heading">Price Range</h3>
            <div className="price-range-container">
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={filters.priceRange[1]}
                onChange={handlePriceChange}
                className="price-slider"
              />
              <div className="price-display">
                ₹ 0 - ₹ {filters.priceRange[1]}
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          <button
            className="clear-filters-button"
            onClick={() =>
              setFilters({
                busType: [],
                departureTime: [],
                priceRange: [0, 5000],
              })
            }
          >
            Clear Filters
          </button>
        </aside>

        {/* Right Section - Bus Cards */}
        <section className="buses-section">
          <div className="buses-count">
            Showing <strong>{busesData.length} buses</strong> available
          </div>

          <div className="buses-container">
            {busesData.map((bus) => (
              <div key={bus.id} className="bus-card">
                <div className="bus-card-header">
                  <div className="bus-info">
                    <h3 className="bus-name">{bus.name}</h3>
                    <span className="bus-type-badge">{bus.type}</span>
                  </div>
                  <div className="bus-rating">
                    <span className="rating-star">⭐</span>
                    <span className="rating-value">{bus.rating}</span>
                  </div>
                </div>

                <div className="bus-details">
                  {/* Departure and Arrival */}
                  <div className="time-section">
                    <div className="time-slot">
                      <p className="time">{bus.departureTime}</p>
                      <p className="location">Pickup Location</p>
                    </div>
                    <div className="duration-line">
                      <div className="duration-info">{bus.duration}</div>
                    </div>
                    <div className="time-slot">
                      <p className="time">{bus.arrivalTime}</p>
                      <p className="location">Destination</p>
                    </div>
                  </div>

                  {/* Seats and Price */}
                  <div className="bus-footer">
                    <div className="seats-info">
                      <span className="seats-label">Seats Available:</span>
                      <span className="seats-count">{bus.seatsAvailable}</span>
                    </div>
                    <div className="price-section">
                      <span className="price-label">From</span>
                      <span className="price-value">₹{bus.price}</span>
                    </div>
                    <button
                      className="select-seats-button"
                      onClick={handleSelectSeats}
                    >
                      Select Seats
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BusResultsPage;
