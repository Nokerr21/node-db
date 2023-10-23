const mongoose = require('mongoose');


const NFC = mongoose.model('NFC', {
  info: String,
  index: String,
  batchNumber: String
});

module.exports = NFC;