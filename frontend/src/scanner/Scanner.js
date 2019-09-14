import React, {useEffect} from 'react';
import Quagga from 'quagga';
import {useDispatch} from "react-redux";
import {scannigEnded, scannigStarted} from "./ScannerReducer";

function Scanner(onResult) {
    const dispatch = useDispatch();
    useEffect(() => {
        Quagga.init({
            inputStream: {
                type: "LiveStream",
                constraints: {
                    width: 640,
                    height: 480,
                    facing: "environment" // or user
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: 2,
            decoder: {
                readers: ["code_128_reader"]
            },
            locate: true
        }, (err) => {
            if (err) {
                return console.log(err);
            }
            Quagga.start();
        });
        Quagga.onDetected((x) => dispatch(scannigStarted(x)));
        return Quagga.offDetected((x) => dispatch(scannigEnded(x)));
    });
    return <div id="interactive" className="viewport"/>
}

export default Scanner