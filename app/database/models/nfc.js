const mongoose = require('mongoose');

const NFCSchema = new mongoose.Schema({
  info: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required:true,
  },
  index: {
    type: String,
    required: false,
  },
  batchNumber: {
    type: String,
    required: false,
  }
});


const NFC = mongoose.model('NFC', NFCSchema);

module.exports = NFC;