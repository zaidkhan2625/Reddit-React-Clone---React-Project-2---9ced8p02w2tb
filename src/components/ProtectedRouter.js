import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StatePeovider';

function ProtectedRouter({ children }) {
  const {isloggedin, setIsUserLoggedIn} = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isloggedin) {
      // Redirect to the home page if the user is not logged in
      navigate('/');
    }
  }, [isloggedin, navigate]);

  // Render children only if the user is logged in
  return isloggedin ? children : null;
}

export default ProtectedRouter;
