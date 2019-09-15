import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useSelector} from "react-redux"
import {withRouter} from "react-router-dom"

function BetterProductDialog({history}) {

    const product = useSelector(state => state.betterProduct.product)
    const [open, setOpen] = React.useState(true);

    function handleAgree() {
        history.push('/product/' + product.ean) ;
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Dialog
                open={!!(open && product)}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Better product found in your area "}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Found product: {product && product.name} with score {product && product.score}
                        Do you want open better product details?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No, thanks
                    </Button>
                    <Button onClick={handleAgree} color="primary" autoFocus>
                        Yes, please
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withRouter(BetterProductDialog)