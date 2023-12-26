const allowedOrigins = ['https://noker21.github.io']

const corsOptions = {
    origin: function (origin, callback) {
      //if (!origin){
      //  return callback(null, false);
      //}
      if (allowedOrigins.indexOf(origin) === -1) {
        let error = new Error('The CORS policy for this site does not allow access from the specified origin: ' + origin)
        error.statusCode = 403;
        return callback(error, false)
      } else {
        return callback(null, true)
      }
    }
}

module.exports = corsOptions;