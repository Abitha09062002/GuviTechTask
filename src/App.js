import React from 'react';
import Login from './Login';
import Signup from './Signup';
import './styles.css'; 

const App = () => {
  return (
    <div className="container">
      <div className="login-container">
        <Login />
      </div>
      <hr />
      <div className="signup-container">
        <Signup />
      </div>
    </div>
  );
};

export default App;
