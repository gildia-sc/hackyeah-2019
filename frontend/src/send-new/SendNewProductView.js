import React, {useState} from "react"
import Grid from '@material-ui/core/Grid';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';



function SendNewProductView({match}) {
    const ean = match.params.ean

    const [photos, setPhotos] = useState([]);

    function onTakePhoto(dataUri) {
        console.log('takePhoto');
        const PhotoImage = <img src={`${dataUri}`} width={100} />
        setPhotos([PhotoImage, ...photos]);
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item>
                    <Camera onTakePhoto = { (dataUri) => { onTakePhoto(dataUri); } } />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                {photos.map(photo => (<Grid item>{photo}</Grid>))}
            </Grid>
            <Grid container spacing={3}>
                <Grid item>{ean}</Grid>
            </Grid>
        </div>
    )
}

export default SendNewProductView

