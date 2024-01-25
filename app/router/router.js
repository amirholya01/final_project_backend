const { indexRoutes } = require("./api");
const { userAuthRoutes } = require("./user/auth");

const router = require("express").Router();

router.use("/", indexRoutes);
router.use("/user", userAuthRoutes);

module.exports = {
    AllRoutes : router
}