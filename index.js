const express = require('express');
const app = express();
const {port} = require('./app/config');
const apiRouter = require('./app/routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = require('./app/security/corsOptions');
const http = require("http");

// database
require('./app/database/dbConnection');

// parsers
app.use(bodyParser.json());

// cors unblock
app.use(cors(corsOptions));

// routes
app.use('/api', apiRouter);

// server
http.createServer(app).listen(port, function(){
    console.log("Server is listening... PORT: " + port);
});