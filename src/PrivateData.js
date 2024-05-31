import React, { useEffect, useState } from 'react';

function PrivateData() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch('/api/private')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return (
    <div className="PrivateData">
      {message ? <p>{message}</p> : 'Loading...'}
    </div>
  );
}

export default PrivateData;