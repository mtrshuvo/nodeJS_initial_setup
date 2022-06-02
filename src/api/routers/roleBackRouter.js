const router = require("express").Router();
const FileInfo = require("../models/fileModel");
const RoleBackFile = require("../models/roleBackFileModel");
const UploadBucket = require("../models/uploadModel");

router.route("/:fileid").get(async(req, res)=> {
    const fileid= req.params.fileid;
    const filedetails = await FileInfo.findOne({_id: fileid});
    if(filedetails){
        return res.status(200).json(filedetails)
    }
    return res.status(400).json("not found")

    
}).post(async(req, res)=> {
    const fileid= req.params.fileid;
    const filedetails = await FileInfo.findOne({_id: fileid});
    if(!filedetails) return res.status(400).json("file not found");
    const roleback = await RoleBackFile.findOne({fileId: filedetails._id})
    if(roleback) return res.status(400).json("Already added to roleback");
    const roleBackFile = await new RoleBackFile({bucketId: filedetails.bucketId, fileId: filedetails._id}).save();
    return res.status(400).json(roleBackFile);

})

module.exports = router;