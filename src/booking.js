import React, { useState, useEffect } from 'react';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/booking/getbookings');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBookings(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <h1>Bookings</h1>
      {bookings.map(booking => (
        <div  key={booking.bookingID}>
            Customer name: {booking.customerName } <br/>
             Travel date: {booking.bookingStartDate}-{booking.bookingEndDate}
        </div>
      ))}
    </div>
  );
};

export default Booking;