const mongoose = require('mongoose');
const { uri } = require('../config');

// db connection
mongoose.connect(uri, {});