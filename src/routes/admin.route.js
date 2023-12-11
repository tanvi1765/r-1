const express = require("express");
const { adminValidation } = require("../validation");
const { adminController } = require("../controller");
const validate = require("../middleware/validate");

const router = express.Router();

// create admin
router.post(
  "/create-admin",
  validate(adminValidation.createadmin),
  adminController.createadmin
);

// Get admin list
router.get(
  "/list",
  adminController.getadminList
);
// get admin details by id
router.get(
  "/get-details/:adminId",
  adminController.getadminDetails
)

// delete admin
router.delete(
  "/delete/:adminId",
  adminController.deleteadmin
)

module.exports = router;