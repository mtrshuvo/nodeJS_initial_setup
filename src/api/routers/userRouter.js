const router = require("express").Router();
const { getSingleUser } = require("../controllers/userController");

router.route("/").get(getSingleUser);

module.exports = router;