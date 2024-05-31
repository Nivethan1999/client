
// import React, { useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// function AuthService() {
//   const { isAuthenticated, user, isLoading, getAccessTokenSilently } = useAuth0();

//   useEffect(() => {
//     const callApi = async () => {
//       try {
//         const token = await getAccessTokenSilently();

//         const response = await fetch('http://localhost:8080/authorized', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         // handle the response
//       } catch (error) {
//         // handle the error
//       }
//     };

//     if (isAuthenticated) {
//       callApi();
//     }
//   }, [isAuthenticated, getAccessTokenSilently]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function AuthService() {
  const { isAuthenticated, user, isLoading, getAccessTokenWithPopup } = useAuth0();

  useEffect(() => {
    const callApi = async () => {
      try {
        const token = await getAccessTokenWithPopup();

        const response = await fetch('http://localhost:8080/authorized', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // handle the response
      } catch (error) {
        // handle the error
      }
    };

    if (isAuthenticated) {
      callApi();
    }
  }, [isAuthenticated, getAccessTokenWithPopup]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="AuthService">
      {isAuthenticated ? (
        <>
          <p>You are logged in</p>
          <div>Your profile: {JSON.stringify(user)}</div>
        </>
      ) : (
        <p>You are logged out</p>
      )}
    </div>
  );
}

export default AuthService;