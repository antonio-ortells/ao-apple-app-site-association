var express = require('express');
var Webtask = require('webtask-tools');

var app = express();

app.get('/', function (req, res) {
  res.status(200).send('Hello World');
});

module.exports = app;