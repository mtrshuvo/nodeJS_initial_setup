const userRouters = require("../routers/userRouter");
const bucketRouters = require("../routers/bucketRouter");
const uploadRouters = require("../routers/fileUploadRouter");
const roleBackfoRouters = require("../routers/roleBackRouter");

module.exports = (app) => {
    app.use("/api/users", userRouters);
    app.use("/api/buckets", bucketRouters);
    app.use("/api/uploads", uploadRouters);
    app.use("/api/rolebacks", roleBackfoRouters);


}