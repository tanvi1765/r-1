const express = require("express");
const{ adminvalidation }=require("../validation");
const{ admincontroller }=require("../controller");
const validate = require("../middleware/validate");

const router = express.Router();

// create admin
router.post(
    "/*create admin",
    validate(adminvalidation.createadmin),
    admincontroller.createadmin
);
//   getadminlist
router.get(
    "/*admin list ",
    validate(adminvalidation.getadminlist),
    admincontroller.getadminList
);
// getadmin by id
router.get(
    "/*getadminBy id",
    validate(adminvalidation,getadminById),
    admincontroller.getadminById
);
// create admin
router.delete(
    "/deleteadmin",
    validate(adminvalidation,deleteadmin),
    admincontroller.deleteadmin
);

module.exports = router