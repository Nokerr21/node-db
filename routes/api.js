const express = require('express');
const router = express.Router();

const nfcActions = require('../actions/api/nfcs');


router.get('/', nfcActions.saveNFC);


module.exports = router;