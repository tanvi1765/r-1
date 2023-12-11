const express = require("express");
const { subadminValidation } = require("../validation");
const { subadminController } = require("../controller");
const validate = require("../middleware/validate");

const router = express.Router();

// create subadmin
router.post(
  "/create-subadmin",
  validate(subadminValidation.createsubadmin),
  subadminController.createsubadmin
);

// Get subadmin list
router.get(
  "/list",
  subadminController.getsubadminList
);
// get subadmin details by id
router.get(
  "/get-details/:subadminId",
  subadminController.getsubadminDetails
)

// delete subadmin
router.delete(
  "/delete/:subadminId",
  subadminController.deletesubadmin
)

module.exports = router;