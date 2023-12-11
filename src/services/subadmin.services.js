const { subadmin } = require("../model");

const createsubadmin = async (reqBody) => {
    return subadmin.create(reqBody);
};

const getsubadminByName = async (subadmin_name) => {
    return subadmin.findOne({ subadmin_name });
};

const getsubadminList = async (filter, options) => {
    return subadmin.find();
};

const deletesubadmin = async (subadminId) => {
    return subadmin.findByIdAndDelete(subadminId);
};

const getsubadminById = async (subadminId) => {
    return subadmin.findById(subadminId);
};

const updateDetails = async () => {
    return subadmin.findByIdAndUpdate();
};

module.exports = {
    createsubadmin,
    getsubadminByName,
    getsubadminList,
    deletesubadmin,
    getsubadminById,
    updateDetails
};