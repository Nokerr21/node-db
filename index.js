const express = require('express');
const app = express();
const {port} = require('./app/config');
const apiRouter = require('./app/routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require("http");

// database
require('./app/database/dbConnection');

// parsers
app.use(bodyParser.json());

// cors unblock
const allowedOrigins = ['https://nokerr21.github.io']
const corsOptions = {
    origin: function (origin, callback) {
    //  if (!origin){
    //    return callback(null, true);
    //  }
      if (allowedOrigins.indexOf(origin) === -1) {
        let error = new Error('The CORS policy for this site does not allow access from the specified origin: ' + origin)
        error.statusCode = 403;
        return callback(error, false)
      } else {
        return callback(null, true)
      }
    }
}
app.use(cors(corsOptions));

// routes
app.use('/api', apiRouter);

// server
http.createServer(app).listen(port, function(){
    console.log("Server is listening... PORT: " + port);
});