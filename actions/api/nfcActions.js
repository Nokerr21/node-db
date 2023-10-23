const NFC = require('../../database/models/nfc')

class NfcActions {
    saveNFC(req, resp){

       // const newNFC = new NFC({
         //   info: 'Test 2',
          //  index: 'TestIndex2',
          //  batchNumber: 'TestBatch2'
         // });
          
       // newNFC.save().then(() => {
        //    console.log('testowe NFC zapisane!');
        //});
       
        const info = req.body.info;
        const index = req.body.index;
        const batchNumber = req.body.batchNumber;


        resp.send('NFC saved! ' + 'info: ' + info + ' index: ' + index  + ' batchNumber: ' + batchNumber);
    }

    getNFC(req, resp){
        const id = req.params.id;
        resp.send('NFC GET: ' + id);
    }
}

module.exports = new NfcActions();