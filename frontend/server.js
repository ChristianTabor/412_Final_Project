//export used
var express = require('express'), url = require("url"), path = require("path"), fs = require("fs");
var _port = 3000;
var app = express();
app.use('/', express.static(path.join(__dirname, '/public')));
app.get('/', function (req, res) {
    res.sendFile('/public/index.html', { root: __dirname });
});
app.listen(_port, function () { console.log('listening port ' + _port + "\n__dirname : " + __dirname); });
