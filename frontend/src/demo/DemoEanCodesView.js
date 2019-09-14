import React from "react"
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {productDetected} from "../scanner/ScannerReducer";

function DemoEanCodesView() {
    const dispatch = useDispatch();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('5901068008128'))}><img src="/demo-ean-codes/test_barcode_5901068008128_300x169.jpg" /></Link></Grid>
                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('5906395781584'))}><img src="/demo-ean-codes/test_barcode_5906395781584_300x169.jpg" /></Link></Grid>
                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('5907700061223'))}><img src="/demo-ean-codes/test_barcode_5907700061223_300x169.jpg" /></Link></Grid>
                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('5906395223015'))}><img src="/demo-ean-codes/test_barcode_5906395223015_300x169.jpg" /></Link></Grid>
            </Grid>
            <Grid item>
                <Grid item><Link to="/">Back to homepage</Link></Grid>
            </Grid>

        </div>
    )
}

export default DemoEanCodesView

