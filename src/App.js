import React from 'react';
import logo from './img/logo.png';
import './App.css';
import Navigation from './components/Navigation';
function App() {
  return (
    <React.Fragment>
    <Navigation/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Coming soon...
          </p>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
