import React from 'react';
import {withRouter} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

function ProductListElement({history, product, betterProduct}) {
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        chip: {
            margin: theme.spacing(1),
        }
    }));
    const classes = useStyles();

    return product.found ? (
        <div>
            <div className={classes.root} >
                <Paper className={classes.paper} style={{ cursor: 'pointer' }} onClick={() => {
                    history.push("/product/" + product.ean)
                }}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={product.image}/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {product.name.slice(0, 32)}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {product.category.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        EAN: {product.ean}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    {betterProduct && (
                                        <Chip
                                            icon={<FaceIcon/>}
                                            label="Found better product"
                                            clickable
                                            className={classes.chip}
                                            color="primary"
                                            deleteIcon={<DoneIcon/>}
                                            onClick={(e) => {
                                                history.push("/product/" + betterProduct.ean);
                                                e.stopPropagation();
                                                e.preventDefault()
                                            }}
                                        />
                                    )}
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">{product.score} pts</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    ) : (
        <div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>

                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        We do not have this product
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        in our database yet :(
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        EAN: {product.ean}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Chip
                                        icon={<FaceIcon/>}
                                        label="Send us more info plz"
                                        clickable
                                        className={classes.chip}
                                        color="primary"
                                        deleteIcon={<DoneIcon/>}
                                        onClick={(e) => {
                                            history.push("/send-new-product/" + product.ean);
                                            e.stopPropagation();
                                            e.preventDefault()
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">? pts</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )

}

export default withRouter(ProductListElement)