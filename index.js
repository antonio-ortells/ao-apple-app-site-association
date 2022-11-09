var express = require('express');
var Webtask = require('webtask-tools');
var request = require('request');

var app = express();
const port = 3000;

const BASEURL='http://echo.jsontest.com';

app.get('/', function (req, res) {
  res.status(200).send(
    {
      applinks: {
        apps: [],
        details: [
          {
            appID: "9JA89QQLNQ.com.my.auth.bundle",
            paths: ["/ios/com.my.auth.bundle/*"]
          }
        ]
      }
    }
  );
});

app.get('/some.file', function (req, res) {
  res.status(200).send("<head></head><body><div><h1>This is some other file</h1></div></body>");
});

app.get('/*', function (req, res) {
  var newurl = `${BASEURL}${req.url}`;
  res.redirect(newurl);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//module.exports = app;

module.exports = Webtask.fromExpress(app);
