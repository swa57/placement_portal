import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Import the Login component
import Signup from './signup'; // Import the Signup component

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
