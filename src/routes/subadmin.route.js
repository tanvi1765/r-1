const express = require("experess");
const{ subadminvalidation }=require("../validation");
const{ subadmincontroller }=require("../controller");
const validate = require("../middleware/validate");

const router = express.Router();

// create subadmin
router.post(
    "/*create subadmin",
    validate(subadminvalidation,createsubadmin),
    subadmincontroller.createsubadmin
);
//   getsubadminlist
router.get(
    "/*subadmin list ",
    validate(subadminvalidation,getsubadminlist),
    admincontroller.getadminlist
);
// create subadmin
router.get(
    "/*getadminBy id",
    validate(subadminvalidation,getsubadminById),
    subadmincontroller.getsubadminById
);
// create subadmin
router.delete(
    "/*deletesubadmin",
    validate(subadminvalidation,deletesubadmin),
    subadmincontroller.deletesubadmin
);

module.exports = router