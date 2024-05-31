// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(
// <Auth0Provider
//     domain="dev-gbgpgaa6k4g1hhtv.us.auth0.com"
//     clientId="pmxX8NKTyC1GyOnZ7fpvk0IaPL2eTkrE"
//     authorizationParams={{
//       redirect_uri: "http://localhost:3000"
//     }}
//   >
//     <App />
//   </Auth0Provider>,
// );

import{ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql} from"@apollo/client";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-gbgpgaa6k4g1hhtv.us.auth0.com"
    clientId="pmxX8NKTyC1GyOnZ7fpvk0IaPL2eTkrE"
    redirectUri="http://localhost:3000"
  >
    <App />
  </Auth0Provider>,
);