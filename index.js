var express = require('express');
var Webtask = require('webtask-tools');
var request = require('request');

var app = express();
const port = 3000;

const BASEURL='http://dev-antonio-ortells.eu.auth0.com';

app.get('/', function (req, res) {
  console.log('Requested root')
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

app.get('/*', function (req, res) {
  console.log(`Requested ${req.url}`)
  var newurl = `${BASEURL}${req.url}`;
  res.redirect(newurl);
});

app.listen(port, () => {
  console.log(`Apple App Site Association listening on port ${port}`)
})

module.exports = Webtask.fromExpress(app);
