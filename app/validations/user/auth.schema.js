const Joi = require("@hapi/joi");

const authRegisterSchema = Joi.object({
    //username: Joi.string().pattern( /^[a-z]+[a-z0-9\_\.]{2,}/gi).error(new Error("The username must be at least 3 characters")),
    email: Joi.string().email().required().error(new Error("Please enter the correct email format")),
    password: Joi.string().min(6).max(16).required().error(new Error("The password should at least be between 6 and 16 characters")),
})

module.exports = {
    authRegisterSchema
}