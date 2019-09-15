import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useSelector} from "react-redux"

export default function BetterProductDialog() {

    const betterProduct = useSelector(state => state.betterProduct.product)
    const [open, setOpen] = React.useState(true);

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Dialog
                open={!!(open && betterProduct)}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Better product found in your area "}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       Do you want open better product details?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No, thanks
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Yes, please
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}