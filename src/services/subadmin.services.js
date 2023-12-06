const {subadmin}= require("../model");

const createsubadmin = async(reqbody)=>{
    return subadmin.create(reqbody);
};
const getsubadminlist =async( req,res)=>{
    return subadmin.find();
};
const getsubadminById =async(userId)=>{
    return subadmin.findById(userId);
};
const deletesubadmin = async(userId)=>{
    return subadmin.deletesubadmin(userId);
}
module.exports={
    createsubadmin,
    getsubadminlist,
    getsubadminById,
    deletesubadmin
}