import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-ejnjwmtbgqu8ys5c.us.auth0.com";
const clientId = "erwuuMF4mH74uvyheku0NTD10lNknEkJ";

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
