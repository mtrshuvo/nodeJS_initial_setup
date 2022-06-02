const { Authorize } = require("../middleware/userMiddleware");
const FileInfo = require("../models/fileModel")
const router = require("express").Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "Buckets")
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage
})
router.route("/:bucketid").post(Authorize, upload.array("allfiles",10) ,async(req, res)=> {
    const bucketid = req.params.bucketid;
    const files = req.files;
    const datas = []
    for(let i = 0; i < files.length; i++){
        datas.push({bucketId: bucketid, filePath: files[i].path});
    }
    // console.log(datas);
    const filesupload = await FileInfo.insertMany(datas);
    return res.status(200).json(filesupload);

}).get(async(req, res)=> {
    const bucketid = req.params.bucketid;
    const singleBucketAllFiles = await FileInfo.find({bucketId: bucketid}).select("filePath");
    if(singleBucketAllFiles.length > 0){
        return res.status(200).json(singleBucketAllFiles);
    }
    return res.status(400).json("not founded")
});



module.exports = router;