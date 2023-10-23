const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');

// database
require('./database/dbConnection');

// routes
app.use('/', apiRouter);

// server
app.listen(port, function(){
    console.log("Server is listening... PORT: " + port)
});