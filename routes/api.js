const express = require('express');
const router = express.Router();

const nfcActions = require('../actions/api/nfcActions');


// router.get('/', nfcActions.saveNFC);

// get NFC

router.get('/nfcs/:id', nfcActions.getNFC);

// post NFC

router.post('/nfcs', nfcActions.saveNFC);

// delete NFC

router.delete('/nfcs/:id', nfcActions.deleteNFC);


module.exports = router;