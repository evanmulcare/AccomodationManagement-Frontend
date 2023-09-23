/* This component conditionally renders the LoginButton or LogoutButton depending on
 whether the user is authenticated or not.
 It uses the useAuth0 hook to access the isAuthenticated property, 
 which is set to true if the user is logged in, and false otherwise. */

import React from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ?  <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;