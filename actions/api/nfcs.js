const NFC = require('../../database/models/nfc')

module.exports = {
    saveNFC(req, resp){

        const newNFC = new NFC({
            info: 'Test 2',
            index: 'TestIndex2',
            batchNumber: 'TestBatch2'
          });
          
        newNFC.save().then(() => {
            console.log('testowe NFC zapisane!');
        });

        resp.send('Main page is running!');
    }
}

