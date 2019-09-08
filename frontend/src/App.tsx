import React from 'react';
import logo from './logo.svg';
import './App.css';
import getWeb3 from "./utils/getWeb3";
import Counter from "./counter/Counter";

const App: React.FC = () => {
  getWeb3();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Counter/>
      </header>
    </div>
  );
}

export default App;
