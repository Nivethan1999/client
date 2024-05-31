import React from 'react';
import Login from './login';
import Logout from './logout';
import Profile from './profile';
import AuthService from './AuthService';
import Destinations from './destination';
import Booking from './booking';
import Payment from './payment';

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <Profile />
      <AuthService />
      <Destinations/>
      <Booking/>
      <Payment/>
    </div>
  );
}

export default App;