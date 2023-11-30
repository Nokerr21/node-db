const NFC = require('../../database/models/nfc')

class NfcActions {

    // save NFC info POST
    async saveNFC(req, resp){
        const info = req.body.info;
        const timeStamp = req.body.timeStamp;
        const index = req.body.index;
        const batchNumber = req.body.batchNumber;

        let nfc;

        try {
            nfc = new NFC({
                info: info,
                timeStamp: timeStamp,
                index: index,
                batchNumber: batchNumber
            });
            await nfc.save();
        } catch (error) {
            return resp.status(422).json({message: error.message})
        }

        resp.status(201).json(nfc);
    }

    // read one NFC info GET
    async getNFC(req, resp){
        const id = req.params.id;

        let nfc;

        try{
            nfc = await NFC.findOne({ _id: id });
        } catch (error) {
            return resp.status(404).json({massage: error.message})
        }
        
        resp.status(200).json(nfc);
    }
   
}

module.exports = new NfcActions();