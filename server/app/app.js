const express = require('express');
// const https = require('https');

const dotenv = require('dotenv');

const longarmRoutes = require('./routes/longarm');

const app = express();

dotenv.config({ path: `${__dirname}/../.env` });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET', 'POST',
  );
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Hello!</h1>');
});

app.use('/api/longarm', longarmRoutes);

module.exports = app;
