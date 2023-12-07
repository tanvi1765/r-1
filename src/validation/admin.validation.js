const joi= require("joi");
/* create admin*/
 const createadmin= {
    body:joi.object().keys({
        admin_name:joi.string().required().trim(),
        admin_type:joi.string().required().trim(),
        other_type:joi.string().required().trim(),
    }),
 };

 module.exports={
   createadmin
 }