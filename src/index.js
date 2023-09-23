import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { Auth0Provider } from '@auth0/auth0-react';

// Get the Auth0 domain, client ID, and audience from environment variables
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// Render the app with the ContextProvider and Auth0Provider components
ReactDOM.render(
    <ContextProvider>
        <Auth0Provider
            domain={domain} // The Auth0 domain
            clientId={clientId} // The Auth0 client ID
            redirectUri={window.location.origin} // The URL to redirect to after authentication
        >
            <App />

        </Auth0Provider>
    </ContextProvider>,
    document.getElementById('root')
);
