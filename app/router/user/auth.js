const { UserAuthController } = require("../../controllers/user/auth/Auth.Controller");
const { registerValidator } = require("../../validations/user/auth");

const router = require("express").Router();
/**
 * @swagger
 * tags:
 *  name: Authentication
 *  description: Login and Register
 */
/**
 * @swagger
 *  /user/register:
 *      post:
 *          summary: register user
 *          tags:
 *          parameters:
 *          -   name: email
 *              description: Please enter the correct email format
 *              in: formData
 *              required: true
 *              type: string
 *          -   name: password
 *              description: The password should at least be between 6 and 16 characters
 *              in: formData
 *              required: true
 *              type: string
 *          responses:
 *              201:
 *                  description: success
 *              400:
 *                  description: bad request
 *              401:
 *                  description: in-authorization
 *              500:
 *                  description: Internal Server Error
 */

router.post("/register", registerValidator(), UserAuthController.register);

module.exports = {
    userAuthRoutes : router
}