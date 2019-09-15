import React from "react"
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {productDetected} from "../scanner/ScannerReducer";

function DemoEanCodesView() {
    const dispatch = useDispatch();
    return (
        <div>
            <Grid container spacing={3} direction="column" alignItems="center" justify="center">
                <Grid item>Product<br /><Link to="/" onClick={()=>dispatch(productDetected('8595611702907'))}><img src="/demo-ean-codes/test_barcode_8595611702907_300x169.jpg" alt="Click to select 8595611702907" /></Link></Grid>
                <Grid item>Missing product<br /><Link to="/" onClick={()=>dispatch(productDetected('5907700061223'))}><img src="/demo-ean-codes/test_barcode_5907700061223_300x169.jpg" alt="Click to select 5907700061223"  /></Link></Grid>
                <Grid item>EAN 8<br /><Link to="/" onClick={()=>dispatch(productDetected('80762386'))}><img src="/demo-ean-codes/test_barcode_80762386_300x169.jpg" alt="Click to select 80762386"  /></Link></Grid>
                <Grid item>Product with better alternative<br /><Link to="/" onClick={()=>dispatch(productDetected('5904825010051'))}><img src="/demo-ean-codes/test_barcode_5904825010051_300x169.jpg" alt="Click to select 5904825010051"  /></Link></Grid>
                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('3245678599730'))}><img src="/demo-ean-codes/test_barcode_3245678599730_300x169.jpg" alt="Click to select 3245678599730"  /></Link></Grid>
                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('5906395781584'))}><img src="/demo-ean-codes/test_barcode_5906395781584_300x169.jpg" alt="Click to select 5906395781584"  /></Link></Grid>
                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('7622210310361'))}><img src="/demo-ean-codes/test_barcode_7622210310361_300x169.jpg" alt="Click to select 7622210310361"  /></Link></Grid>
                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('5901414204051'))}><img src="/demo-ean-codes/test_barcode_5901414204051_300x169.jpg" alt="Click to select 5901414204051"  /></Link></Grid>

                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('5901068008128'))}><img src="/demo-ean-codes/test_barcode_5901068008128_300x169.jpg" alt="Click to select 5901068008128" /></Link></Grid>
                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('5906395781584'))}><img src="/demo-ean-codes/test_barcode_5906395781584_300x169.jpg" alt="Click to select 5906395781584"  /></Link></Grid>
                <Grid item><Link to="/" onClick={()=>dispatch(productDetected('5906395223015'))}><img src="/demo-ean-codes/test_barcode_5906395223015_300x169.jpg" alt="Click to select 5906395223015"  /></Link></Grid>
            </Grid>

        </div>
    )
}

export default DemoEanCodesView

