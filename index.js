const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

// database
require('./database/dbConnection');

// parsers
app.use(bodyParser.json());

// routes
app.use('/api', apiRouter);

// server
app.listen(port, function(){
    console.log("Server is listening... PORT: " + port);
});