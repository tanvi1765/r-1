const {subadminservice} = require("../services");

/** create subadminservice */
const createsubadmin = async (req, res) => {
  try {
    const reqBody = req.body;
    const subadminExists = await subadminservice(reqBody);
    if (subadminExists) {
      throw new Error("subadmin already created by this subadmin service!");
    }

    const subadmin = await subadminservice.createsubadmin(reqBody);

    res.status(200).json({
      success: true,
      message: "subadmin create successfully!",
      data: { subadmin },
    });
  } catch (error) {
    res.status(400).json({
       success: false,
       message: error.message });
  }
};

/** Get subadmin list */
const getsubadminList= async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get subadmin list successfully!",
      data: getsubadminList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
       message: error.message });
  }
};

/** Delete subadmin user */
const deletesubadmin = async (req, res) => {
  try {
    const userId = req.params.userId;
    const subadminExists = await subadminservice.getuserById(subadminId);
    if (!subadminExists) {
      throw new Error(" subadmin User not found!");
    }

    await subadminservice.deletesubadmin(subadminId);

    res.status(200).json({
      success: true,
      message: " subadmin User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message });
  }
};

/* update subadmin  */
const updatesubadmin = async (req, res) => {
  try {
    const subadminId = req.params.subadminId;

    const cateExists = await subadminservice.getsubadminById(subadminId);
    if (!cateExists) {
      throw new Error("subadmin not found!");
    }

    await subadminservice.updateDetails(subadminId, req.body);

    res.status(200).json({
      success: true,
      message: "subadmin details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Get subadmin details by id */
const getsubadminDetails = async (req, res) => {
  try {
    const getsubadminDetails = await subadminservice.getsubadminById(req.params.subadminId
      );
    if (!getDetails) {
      throw new Error("subadmin not found!");
    }

    res.status(200).json({
      success: true,
      message: "User subadmin get successfully!",
      data: getsubadminDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createsubadmin,
   getsubadminList,
   getsubadminDetails,
   updatesubadmin,
   deletesubadmin,
};