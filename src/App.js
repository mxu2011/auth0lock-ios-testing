import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth0Lock from 'auth0-lock';

function initAuth0Lock() {
  const lock = new Auth0Lock('TUTN6eL6GdpbRuD6zPYC6UkdpRRcpoLm', 'dev-p0fhuh-n.auth0.com', {
    auth: {
      redirectUrl: `${window.location.origin}/callback`,
      responseType: 'token id_token',
    },
  });
  lock.on('authenticated', authResult => {
    // Handle the authentication result here (e.g., store tokens, redirect).
    console.log(authResult);
    lock.hide();
  });
  return lock;
}

function showAuth0Lock() {
  const lock = initAuth0Lock();
  lock.show();
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={showAuth0Lock}>
          Log In
        </button>
      </header>
    </div>
  );
}

export default App;
