import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StatePeovider';

function ProtectedRouter({ children }) {
  const {isUserLoggedIn, setIsUserLoggedIn} = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      // Redirect to the home page if the user is not logged in
      navigate('/');
    }
  }, [isUserLoggedIn, navigate]);

  // Render children only if the user is logged in
  return isUserLoggedIn ? children : null;
}

export default ProtectedRouter;
