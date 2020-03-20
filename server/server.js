const express = require('express');
const middlewares = require('./middleware');
const app = express();

middlewares(app);

module.exports = app;
