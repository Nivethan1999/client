import React, { useState, useEffect } from 'react';
import Interceptor from './Interceptor';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [bookingStartDate, setBookingStartDate] = useState('');
  const [bookingEndDate, setBookingEndDate] = useState('');

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('https://swwao.courses.orbit.au.dk/grp-17/api-gateway/destination/destinations');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const postBooking = async (_id) => {
    try {
      const response = await fetch('https://swwao.courses.orbit.au.dk/grp-17/api-gateway/booking/postbooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          _id, 
          customerName, 
          bookingStartDate, 
          bookingEndDate 
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Booking posted!');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Destinations</h1>
      <ul>
        {destinations.map(destination => (
          <li key={destination._id}>
            {destination.startDestination} to {destination.endDestination} - {destination.price} kr
            <button onClick={() => postBooking(destination._id)}>Book this destination</button>
          </li>
        ))}
      </ul>
      <h2>Book a destination</h2>
      <form onSubmit={(e) => { e.preventDefault(); postBooking(); }}>
        <label>
          Customer Name:
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        </label>
        <label>
          Booking Start Date:
          <input type="text" value={bookingStartDate} onChange={(e) => setBookingStartDate(e.target.value)} />
        </label>
        <label>
          Booking End Date:
          <input type="text" value={bookingEndDate} onChange={(e) => setBookingEndDate(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

export default Destinations;

