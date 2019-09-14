import React from 'react';
import './App.css';
import ProductScannerView from "./scanner/ProductScannerView";
import ProductDetailsView from "./product/ProductDetalisView";
import DemoEanCodesView from "./demo/DemoEanCodesView";
import SendNewProductView from "./send-new/SendNewProductView";

import {BrowserRouter as Router, Route} from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NewProductSentView from "./send-new/NewProductSentView";
import SvgIcon from '@material-ui/core/SvgIcon';

function HomeIcon(props) {
  return (
    <a href="/">
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
    </a>
  );
}

function App() {
    return (
        <Router>
            <div className="App">

                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Choose Eco</Typography>&nbsp;&nbsp;<HomeIcon color="action" />
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
