const {admin}= require("../model");

const createadmin = async(reqbody)=>{
    return admin.create(reqbody);
};
const getadminlist =async( req,res)=>{
    return admin.find();
};
const getadminById =async(userId)=>{
    return admin.findById(userId);
};
const deleteadmin = async(userId)=>{
    return admin.deleteadmin(userId);
}
module.exports={
    createadmin,
    getadminlist,
    getadminById,
    deleteadmin
}