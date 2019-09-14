import {useDispatch, useSelector} from "react-redux"
import React, {useEffect} from "react"
import {fetchProduct} from "./ProductsReducer"

import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slide from '@material-ui/core/Slide';

function ProductDetailsView({history, match}) {
    const ean = match.params.ean
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const product = products.find(p => p.ean === ean);
    const humanizer = require('humanize-duration')
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      margin_top: {
          marginTop: '10px',
        }
    }));
    const BorderLinearProgress = withStyles({
      root: {
        height: 10,
        backgroundColor: lighten('#ff6c5c', 0.5),
      },
      bar: {
        borderRadius: 20,
        backgroundColor: '#ff6c5c',
      },
    })(LinearProgress);
    const classes_progress = useStyles();
    const classes = useStyles();
    useEffect(() => {
        product || dispatch(fetchProduct(ean))
    }, [ean])

    const [scoring, setScoring] = React.useState(0);
    const productScoring = 77

      React.useEffect(() => {
        function progress() {
          setScoring(oldScoring => {
            if (oldScoring === productScoring) {
              return productScoring;
            }
            const diff = 1;
            return Math.min(oldScoring + diff, productScoring);
          });
        }

        if (scoring < productScoring){
            const timer = setInterval(progress, 10);
             return () => {
                  clearInterval(timer);
             };
        }
      }, []);

    function getProductAndPackageWeight(product) {
        return product.productWeight + product.packageWeight;
    }
    function getGeneratedWasteScore(product) {
        return (getProductAndPackageWeight(product) / product.productWeight * 100 - 100).toFixed(2) ;
    }
    function humanizeDate(days) {
        return humanizer(days*24*60*60*1000);
    }
    return (
        <>
            { product && (
             <div className={classes.root}>
              <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <Grid container spacing={3}>
                    <Grid item xs={12}><Paper elevation={4} className={classes.paper}>Product name<Typography variant="h5" component="h3">{product.name}</Typography> </Paper>
                        <BorderLinearProgress className={classes_progress.marin} variant="determinate"
                                          color="primary" value={scoring} />
                        <Grid
                          container
                          spacing={0}
                          direction="column"
                          alignItems="center"
                          justify="center"
                        >

                          <Grid item xs={3}>
                            Score: {scoring}
                          </Grid>

                        </Grid>

                    </Grid>
                    <Grid item xs={12}><img src={product.image} style={{display: "block",
                                                                        "margin-left": "auto",
                                                                        "margin-right": "auto",
                                                                        width: "50%"}}/></Grid>
                    <Grid item xs={6} >
                        <Grid container direction="column" justify="flex-end" alignItems="center">
                            <Typography variant="h5" component="h4">Product</Typography><br />
                                <Grid item xs={6}><Typography variant="caption" display="block" gutterBottom classes={classes.margin_top}>Company</Typography></Grid>
                                    <Grid item xs={6}><img src={product.company.logo} width="40" height="40"/></Grid>
                                <Grid item xs={6}><br /><Typography variant="caption" display="block" gutterBottom>Category</Typography></Grid>
                                    <Grid item xs={6}>{product.category.name}</Grid>
                                <Grid item xs={6}><br /><Typography variant="caption" display="block" gutterBottom>Weight</Typography></Grid>
                                    <Grid item xs={6}>{getProductAndPackageWeight(product)} mg</Grid>
                                <Grid item xs={6}><br /><Typography variant="caption" display="block" gutterBottom>Shipping distance</Typography></Grid>
                                    <Grid item xs={6}>TODO: {product.latitude} / {product.longitude}</Grid>
                         </Grid>
                    </Grid>
                     <Grid item xs={6} >
                        <Grid container direction="column" justify="flex-end" alignItems="center" >
                            <Typography variant="h5" component="h3">Package</Typography><br />
                                <Grid item xs={6}><Typography variant="caption" display="block" gutterBottom classes={classes.margin_top}>Weight %</Typography></Grid>
                                    <Grid item xs={6}>{getGeneratedWasteScore(product)} %</Grid>
                                <Grid item xs={6}><br /><Typography variant="caption" display="block" gutterBottom>Type</Typography></Grid>
                                    <Grid item xs={6}><img src={product.packageMaterial.logo} width="40" height="40"/></Grid>
                                <Grid item xs={6}><br /><Typography variant="caption" display="block" gutterBottom>Recycle potential</Typography></Grid>
                                    <Grid item xs={6}>{product.packageMaterial.recyclePotential} %</Grid>
                                <Grid item xs={6}><br /><Typography variant="caption" display="block" gutterBottom>Biodegradate time</Typography></Grid>
                                    <Grid item xs={6}>{humanizeDate(product.packageMaterial.timeToBiodegradateInDays)}</Grid>
                         </Grid>
                    </Grid>

                </Grid>
                </Slide>
             </div>
            )}
        </>)
}

export default ProductDetailsView

