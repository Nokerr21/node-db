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
const whiteList = ['https://nokerr21.github.io/nfcontrol-worker/', 'https://nokerr21.github.io/nfcontrol-user/', 'https://node-nfc-db.onrender.com/']
const corsOptions = {
    origin: function (origin, callback) {
      if (whiteList.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
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

//app.listen(port, function(){
 //   console.log("Server is listening... PORT: " + port);
//});