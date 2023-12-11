const mongoose = require("mongoose");
const subadminSchema= new mongoose.Schema({
    subadmin_name:{
        type:String,
        trim:true,
    },
    subadmin_type:{
        type:String,
        trim:true,
    },
    is_active:{
        type:Boolean,
        default:true,
    },
})
const subadmin = mongoose.model("subadmin",subadminSchema);
module.exports = subadmin;