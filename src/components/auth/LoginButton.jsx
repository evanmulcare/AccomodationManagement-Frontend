
/* This component represents a login button that is displayed when the user is not authenticated
    It uses the useAuth0 hook to get the loginWithRedirect and isAuthenticated functions from the Auth0 provider
    If the user is not authenticated, the button is displayed
    When the user clicks on the button, the loginWithRedirect function is called to redirect the user 
    to the Auth0 login page and authenticate the user */


import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
    <button
    className="bg-lime-500 text-white p-3 rounded-md hover:bg-lime-700"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
    )
  );
};

export default LoginButton;