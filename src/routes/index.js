const experess= require("express");
const router= experess.Router();

const adminRoute= require("./admin.route");
router.use("/admin",adminRoute);

const subadminRoute = require("./subadmin.route");
router.use("/subadmin",subadminRoute);

