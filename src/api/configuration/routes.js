const userRouters = require("../routers/userRouter");
module.exports = (app) => {
    app.use("/nsl/api", userRouters);
}