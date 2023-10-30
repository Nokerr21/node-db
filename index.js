const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require("http");

// database
require('./database/dbConnection');

// parsers
app.use(bodyParser.json());

// cors unblock
app.use(cors());

// routes
app.use('/api', apiRouter);

// server
http.createServer(app).listen(port, function(){
    console.log("Server is listening... PORT: " + port);
});

//app.listen(port, function(){
 //   console.log("Server is listening... PORT: " + port);
//});