import React from 'react';
import './App.css';
import ProductScannerView from "./scanner/ProductScannerView";
import ProductDetailsView from "./product/ProductDetalisView";
import DemoEanCodesView from "./demo/DemoEanCodesView";
import SendNewProductView from "./send-new/SendNewProductView";
import {withRouter} from 'react-router-dom'

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NewProductSentView from "./send-new/NewProductSentView";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NotFound from "./NotFound"

function button({history}) {
    return (<Button color="inherit" onClick={() => history.push("/demo-ean-codes") }>Test data</Button>);
}

const ButtonWithRouter = withRouter(button);

function App() {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));

    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>

                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <Link to="/"><HomeIcon/></Link>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Choose Eco</Typography>
                        <ButtonWithRouter />
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={ProductScannerView}/>
                    <Route path="/product/:ean" component={ProductDetailsView}/>
                    <Route path="/demo-ean-codes" component={DemoEanCodesView}/>
                    <Route path="/send-new-product/:ean" component={SendNewProductView}/>
                    <Route path="/new-product-sent" component={NewProductSentView}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
