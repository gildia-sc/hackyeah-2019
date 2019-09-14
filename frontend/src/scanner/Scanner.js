import React, {useEffect} from 'react';
import Quagga from 'quagga';
import {useDispatch} from "react-redux";
import {productDetected, scannigStarted} from "./ScannerReducer";

function Scanner() {
    const dispatch = useDispatch();
    useEffect(() => {
        Quagga.init({
            inputStream: {
                type: "LiveStream",
                constraints: {
                    width: 640,
                    height: 480,
                    facingMode: "environment" // or user
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: 2,
            decoder: {
                readers: ["code_128_reader", "ean_reader", "ean_8_reader"]
            },
            locate: true
        }, (err) => {
            if (err) {
                return console.log(err);
            }
            Quagga.start();
            dispatch(scannigStarted())
        });
        Quagga.onDetected((x) => dispatch(productDetected(x.codeResult.code)))
    });
    return <div id="interactive" className="viewport"/>
}

export default Scanner
