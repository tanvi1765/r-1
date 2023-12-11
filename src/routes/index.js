const express = require("express");

const adminRoute = require("./admin.route");
const subadminRoute = require("./subadmin.route");

const router = express.Router();

router.use("/admin", adminRoute);
router.use("/subadmin", subadminRoute);


module.exports = router;