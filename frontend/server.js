const express = require('express');
var path = require('path');
var fs = require('fs');
var https = require('https');
var proxy = require('http-proxy-middleware');

var privateKey = fs.readFileSync('privatekey.pem');
var certificate = fs.readFileSync('server.crt');
var credentials = {key: privateKey, cert: certificate};

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//app.use(proxy('/products/**', {target: 'http://ec2-18-220-161-116.us-east-2.compute.amazonaws.com:8080', changeOrigin: true}));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

var httpsServer = https.createServer(credentials, app);
var port=443;
httpsServer.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at https://localhost:' + port);
});