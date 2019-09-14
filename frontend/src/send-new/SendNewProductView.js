import React, {useState} from "react"
import {withRouter} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

function SendNewProductView({history, match}) {

    const [photos, setPhotos] = useState([]);

    const [values, setValues] = useState({
        ean: match.params.ean,
        category: '',
        name: '',
    });

    function onTakePhoto(dataUri) {
        const PhotoImage = <img src={`${dataUri}`} width={100} alt="Product" />
        setPhotos([PhotoImage, ...photos]);
    }

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    function isFormValid() {
        return values.ean !== '' &&  values.category !== '' &&  values.name !== '';
    }

    function submitForm() {
        // TODO send to API
        history.push('/new-product-sent');
    }

    return (
        <div>
            <form autoComplete="off">
                <Grid container>
                    <Grid item xs={12}>
                        <Camera onTakePhoto = { (dataUri) => { onTakePhoto(dataUri); } } />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    {photos.map(photo => (<Grid item>{photo}</Grid>))}
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField
                            required
                            id="standard-required"
                            label="EAN"
                            defaultValue={values.ean}
                            margin="normal"
                            onChange={handleChange('ean')}
                        />
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="category">Category</InputLabel>
                            <Select
                                value={values.category}
                                onChange={handleChange('category')}
                            >
                                <MenuItem value={1}>Cookie</MenuItem>
                                <MenuItem value={2}>Gums</MenuItem>
                                <MenuItem value={3}>Laptop accessories</MenuItem>
                                <MenuItem value={4}>Beverages</MenuItem>
                                <MenuItem value={5}>Hygienic products</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="standard-required"
                            label="Name"
                            defaultValue={values.name}
                            margin="normal"
                            onChange={handleChange('name')}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" disabled={!isFormValid()} onClick={() => submitForm()}>
                            Send product
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default withRouter(SendNewProductView)

