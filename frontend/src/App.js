import React from 'react';
import './App.css';
import ProductScannerView from "./scanner/ProductScannerView";
import ProductDetailsView from "./product/ProductDetalisView";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <p>
                        Choose Eco
                    </p>
                </header>
                <Route exact path="/" component={ProductScannerView}/>
                <Route path="/product/:ean" component={ProductDetailsView}/>
            </div>
        </Router>
    );
}

export default App;
