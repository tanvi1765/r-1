const joi= require("joi");
/* create subadmin*/
 const createsubadmin= {
    body: joi.object().keys({
        subadmin_name:joi.string().required().trim(),
        subadmin_type:joi.string().required().trim(),
        other_type:joi.string().required().trim(),
    }),
 };

module.exports={
    createsubadmin,
};