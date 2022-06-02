const router = require("express").Router();
const { Authorize } = require("../middleware/userMiddleware");
const UploadBucket = require("../models/uploadModel");

router.route("/").post(Authorize,async(req, res)=> {
    const {bucketName} = req.body;
    const {id} = req.user;

    const bkt = await UploadBucket.findOne({bucketName: bucketName});
    if(bkt) return res.status(400).json("bucekt name exist")
    const bucket = await new UploadBucket({bucketName: bucketName, uploadBy:id}).save();
    return res.status(200).json(bucket);
})


module.exports = router;