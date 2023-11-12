const NFC = require('../../database/models/nfc')

class NfcActions {

    // save NFC info POST
    async saveNFC(req, resp){
        const info = req.body.info;
        const index = req.body.index;
        const batchNumber = req.body.batchNumber;

        let nfc;

        try {
            nfc = new NFC({
                info: info,
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
        const nfc = await NFC.findOne({ _id: id });
        resp.json(nfc);
    }
    
}

module.exports = new NfcActions();