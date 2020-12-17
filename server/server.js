const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');
require('newrelic')


const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();
app.get('/:id', (req, res) => {
  res.sendFile(PUBLIC_DIR + '/index.html')
  // res.send('hi')
})

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);


module.exports = app;
