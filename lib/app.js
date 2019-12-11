const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/recipes', require('./routes/routes'));

module.exports = app;
