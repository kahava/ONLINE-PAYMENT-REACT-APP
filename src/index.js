import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react"

const domain = process.env.AUTHENTICATION_DOMAIN;
const clientId = process.env.AUTHENTICATION_CLIENT_ID;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    
    > 
      <App />
    </Auth0Provider>
   
  </React.StrictMode>
);


