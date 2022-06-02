const {Schema, model} = require("mongoose");

const uploadModel = new Schema({
    bucketName: {type: String, unique: true},
    uploadBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    isReviewerAdded: Boolean,
    reviewedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"   
    }

    
});

module.exports = model("Upload", uploadModel);