import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await axios({
          url: 'http://localhost:5000/graphql/getAllPaymentDetails',
          method: 'post',
          data: {
            query: `
              query {
                getAllPaymentDetails {
                  id
                  booking {
                    bookingStartDate
                    bookingEndDate
                  }
                  destination {
                    price
                  }
                }
              }
            `
          }
        });

        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }

        setPaymentDetails(response.data.data.getAllPaymentDetails);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Payment Details</h1>
      <ul>
        {paymentDetails.map(detail => (
          <li key={detail.id}>
            Booking Start Date: {detail.booking.bookingStartDate}, 
            Booking End Date: {detail.booking.bookingEndDate}, 
            Price: {detail.destination.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payment;