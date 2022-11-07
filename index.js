var express = require('express');
var Webtask = require('webtask-tools');
const nconf = require('nconf');

var app = express();

nconf
  .argv()
  .env()
  .file(path.join(__dirname, './server/config.json'))
  .defaults({
    NODE_ENV: 'development',
    HOSTING_ENV: 'default',
    PORT: 3000,
    AUTH0_RTA: 'auth0.auth0.com',
    EXTENSION_SECRET: 'secret'
  });

app.get('/', function (req, res) {
  res.status(200).send('Hello World');
});

const port = nconf.get('PORT');

app.listen(port, (error) => {
  if (error) {
    logger.error(error);
  } else {
    logger.info(`Listening on http://localhost:${port}.`);
  }
});
