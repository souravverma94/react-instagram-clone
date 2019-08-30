const functions = require('firebase-functions');
const os = require("os");
const path = require("path");
const cors = require('cors')({ origin: true });
const Busboy = require('busboy');
const fs = require('fs');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const gcs = admin.storage();
// const gcconfig = {
//     projectId: "reactinsta-2f409",
//     keyFilename: "reactinsta-2f409-firebase-adminsdk-nwo14-aacc39fcaf.json"
//   };

// const gcs = require("@google-cloud/storage")(gcconfig);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.uploadFile = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        const busboy = new Busboy({ headers: req.header });
        let uploadData = null;
        busboy.on('file', (fieldName, file, fileName, encoding, mimeType) => {
            const filePath = path.join(os.tmpdir(), fileName);
            uploadData = { file: filePath, mtype: mimeType };
            console.log(uploadData);
            file.pipe(fs.createWriteStream(filePath));
        });

        busboy.on('finish', () => {
            const bucket = storage.bucket('reactinsta-2f409.appspot.com')
            bucket.upload(uploadData.file, {
                uploadType: 'media',
                metadata: {
                    metadata: {
                        contentType: uploadData.mtype
                    }
                }
            }).then(() => {
                return res.status(200).json({
                    message: 'It Works!!!'
                });
            })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        });
        req.pipe(busboy);
    });
});
