import React, { useContext } from 'react';
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  console.log(user);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
