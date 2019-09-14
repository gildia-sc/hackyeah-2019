import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScanProductView from "./scanner/ScanProductView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ScanProductView/>
      </header>
    </div>
  );
}

export default App;
