const { admin } = require("../model")

const createadmin = async (reqBody) => {
    return admin.create(reqBody);
};

const getadminByName = async (admin_name) => {
    return admin.findOne({ admin_name });
};

const getadminList = async (filter, options) => {
    return admin.find();
};

const deleteadmin = async (adminId) => {
    return admin.findByIdAndDelete(adminId);
};

const getadminById = async (adminId) => {
    return admin.findById(adminId);
};

const updateDetails = async () => {
    return admin.findByIdAndUpdate();
};

module.exports = {
    createadmin,
    getadminByName,
    getadminList,
    deleteadmin,
    getadminById,
    updateDetails
};