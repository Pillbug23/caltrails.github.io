import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const domaine = process.env;
const clientIde = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log({domaine})
console.log({clientIde})

ReactDOM.render(
  <Auth0Provider
    domain="dev-ylrt4uen.us.auth0.com"
    clientId="oQ1tGopqjYqRYJrSxUZdgU5SbNuNfTmJ"
    redirectUri={'https://pillbug23.github.io/caltrails.github.io/'}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
