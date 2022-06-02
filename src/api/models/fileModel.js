const {Schema, model} = require("mongoose");


const fileSchema = new Schema({
    bucketId: {
        type: Schema.Types.ObjectId,
        ref: 'Upload'
    },
    filePath: {
        type: String
    }
});

module.exports = model("FileInfo", fileSchema);