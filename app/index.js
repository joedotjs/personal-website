var path = require('path');
var express = require('express');
var morgan = require('morgan');
var app = express();
module.exports = app;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

var pathToIndexHTML = path.join(__dirname, '../', './views/index.html');

app.get('/', function (req, res) {
    res.sendFile(pathToIndexHTML);
});