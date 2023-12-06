const { boolean } = require("joi");
const mongoose = require("mongoose");
const adminSchema= new mongoose.adminSchema({
    admin_name:{
        type:String,
        trim:true,
    },
    admin_type:{
        type:String,
        trim:true,
    },
    is_active:{
        type:boolean,
        default:true,
    },
})
const admin=mongoose.model("admin",adminSchema)
module.exports = admin