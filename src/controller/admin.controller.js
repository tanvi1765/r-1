const { adminservice } = require("../services");

/** create adminservice */
const createadmin = async (req, res) => {
  try {
    const reqBody = req.body;
    const adminExists = await adminservice(reqBody.admin_name);
    if (adminExists) {
      throw new Error("admin already created by this admin service!");
    }

    const admin = await adminservice.createadmin(reqBody);

    res.status(200).json({
      success: true,
      message: "admin create successfully!",
      data: { admin },
    });
  } catch (error) {
    res.status(400).json({
       success: false,
       message: error.message });
  }
};

/** Get admin list */
const getadminList= async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get admin list successfully!",
      data: getadminlist,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
       message: error.message });
  }
};

/** Delete admin user */
const deleteadmin = async (req, res) => {
  try {
    const userId = req.params.userId;
    const adminExists = await adminservice.getuserById(adminId);
    if (!adminExists) {
      throw new Error(" admin User not found!");
    }

    await adminservice.deleteadmin(adminId);

    res.status(200).json({
      success: true,
      message: " admin User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message });
  }
};

/** Get admin details by id */
const getadminDetails = async (req, res) => {
  try {
    const getadminDetails = await adminservice.getadminById(req.params.adminId);
    if (!getDetails) {
      throw new Error("admin not found!");
    }

    res.status(200).json({
      success: true,
      message: "User admin get successfully!",
      data: getadminDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createadmin,
   getadminList,
   getadminDetails,
   deleteadmin,
};