import React from "react"
import {withRouter} from 'react-router-dom'
import 'react-html5-camera-photo/build/css/index.css';
import Button from "@material-ui/core/Button";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import * as PropTypes from "prop-types";
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const variantIcon = {
    success: CheckCircleIcon,
};

const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

function MySnackbarContentWrapper(props) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
        </span>
            }
            {...other}
        />
    );
}

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success']).isRequired,
};

function NewProductSentView({history}) {

    return (
        <div>
            <MySnackbarContentWrapper
                variant="success"
                message="Product was sent, thank you!"
            />

            <Button variant="contained" color="primary" onClick={() => history.push('/')}>
                Back to homepage
            </Button>
        </div>
    )
}

export default withRouter(NewProductSentView)

