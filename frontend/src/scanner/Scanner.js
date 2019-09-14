import React, {useEffect, memo} from 'react';
import { BrowserBarcodeReader, NotFoundException, ChecksumException, FormatException, BarcodeFormat, DecodeHintType } from '@zxing/library';
import {useDispatch} from "react-redux";
import {productDetected, scannigStarted} from "./ScannerReducer";

const Scanner = memo(() => {
    const dispatch = useDispatch();
    useEffect(() => {
	    let selectedDeviceId;
            dispatch(scannigStarted())
	    const hints = new Map();
            const formats = [BarcodeFormat.EAN_13, BarcodeFormat.EAN_8];
            hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);

	    const codeReader = new BrowserBarcodeReader()
	    codeReader.setHints(hints)
	    console.log('ZXing code reader initialized')
	    codeReader.getVideoInputDevices()
                .then((videoInputDevices) => {
                    selectedDeviceId = videoInputDevices[0].deviceId
                    codeReader.decodeFromInputVideoDeviceContinuously(selectedDeviceId, 'video', (result, err) => {
			if (result) {
			    // properly decoded qr code
		            console.log(result)
			    dispatch(productDetected(result.text));
			}
			if (err) {
         		     // As long as this error belongs into one of the following categories
                             // the code reader is going to continue as excepted. Any other error
                             // will stop the decoding loop.
                             //
                             // Excepted Exceptions:
                             //
                             //  - NotFoundException
                             //  - ChecksumException
                             //  - FormatException
                             if (err instanceof NotFoundException) {
                                 // expexted usecase
				 // console.log('No barcode found.')
                             }
                             if (err instanceof ChecksumException) {
                                 console.log('A code was found, but it\'s read value was not valid.')
                             }
                             if (err instanceof FormatException) {
                                 console.log('A code was found, but it was in a invalid format.')
                             }
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
