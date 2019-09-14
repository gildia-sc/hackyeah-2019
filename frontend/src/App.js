import React from 'react';
import './App.css';
import ProductScannerView from "./scanner/ProductScannerView";
import ProductDetailsView from "./product/ProductDetalisView";
import DemoEanCodesView from "./demo/DemoEanCodesView";

import {BrowserRouter as Router, Route} from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
    return (
        <Router>
            <div className="App">

                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Choose Eco</Typography>
                    </Toolbar>
                </AppBar>
                <Route exact path="/" component={ProductScannerView}/>
                <Route path="/product/:ean" component={ProductDetailsView}/>
                <Route path="/demo-ean-codes" component={DemoEanCodesView}/>
            </div>
        </Router>
    );
}

export default App;
