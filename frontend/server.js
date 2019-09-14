const express = require('express');
var path = require('path');
var fs = require('fs');
var https = require('https');

var privateKey = fs.readFileSync('privatekey.pem');
var certificate = fs.readFileSync('server.crt');
var credentials = {key: privateKey, cert: certificate};

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

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