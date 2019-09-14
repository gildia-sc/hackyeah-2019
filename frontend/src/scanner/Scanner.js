import React, {useEffect, memo} from 'react';
import { BrowserBarcodeReader } from '@zxing/library';
import {useDispatch} from "react-redux";
import {productDetected, scannigStarted} from "./ScannerReducer";

const Scanner = memo(() => {
    const dispatch = useDispatch();
    useEffect(() => {
	    let selectedDeviceId;
            dispatch(scannigStarted())
	    const codeReader = new BrowserBarcodeReader()
	    console.log('ZXing code reader initialized')
	    codeReader.getVideoInputDevices()
                .then((videoInputDevices) => {
                    selectedDeviceId = videoInputDevices[0].deviceId
                    codeReader.decodeFromInputVideoDeviceContinuously(selectedDeviceId, 'video', (result) => {
			if (result != null) {
			    console.log(result)
			    dispatch(productDetected(result.text));
			}
                    })
                    console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
                })
                .catch((err) => {
                    console.error(err)
                })
    });
    return <div id="interactive" className="viewport"><video id="video" width="100%" height="400" style={{border: "1px solid gray"}} autoPlay={true} muted={true} playsInline={true}></video></div>
})

export default Scanner
