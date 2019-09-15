import React from 'react';
import './App.css';
import ProductScannerView from "./scanner/ProductScannerView";
import ProductDetailsView from "./product/ProductDetalisView";
import DemoEanCodesView from "./demo/DemoEanCodesView";
import SendNewProductView from "./send-new/SendNewProductView";

import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NewProductSentView from "./send-new/NewProductSentView";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';

function App() {
    return (
        <Router>
            <div className="App">

                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Link to="/"><HomeIcon /></Link>
                        </IconButton>
                        <Typography variant="h6">Choose Eco</Typography>
                    </Toolbar>
                </AppBar>
                <Route exact path="/" component={ProductScannerView}/>
                <Route path="/product/:ean" component={ProductDetailsView}/>
                <Route path="/demo-ean-codes" component={DemoEanCodesView}/>
                <Route path="/send-new-product/:ean" component={SendNewProductView}/>
                <Route path="/new-product-sent" component={NewProductSentView}/>
            </div>
        </Router>
    );
}

export default App;
