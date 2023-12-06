const { boolean } = require("joi");
const mongoose = require("mongoose");
const subadminSchema= new mongoose.subadminSchema({
    subadmin_name:{
        type:String,
        trim:true,
    },
    subadmin_type:{
        type:String,
        trim:true,
    },
    is_active:{
        type:boolean,
        default:true,
    },
})
const subadmin=mongoose.model("admin",subadminSchema)
module.exports = subadmin