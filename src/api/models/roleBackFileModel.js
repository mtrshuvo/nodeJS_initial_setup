const {Schema, model} = require("mongoose");

const roleBackModel= new Schema({
    bucketId : {
        type: Schema.Types.ObjectId,
        ref: 'Upload'

    },
    fileId: {
        type: Schema.Types.ObjectId,
        ref: 'FileInfo'
    }

});

module.exports = model("RoleBack", roleBackModel);