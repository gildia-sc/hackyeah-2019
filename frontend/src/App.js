import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductScannerView from "./scanner/ProductScannerView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            Choose Eco
        </p>
        <ProductScannerView/>
      </header>
    </div>
  );
}

export default App;
