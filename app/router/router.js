const { indexRoutes } = require("./api");

const router = require("express").Router();

router.use("/", indexRoutes);

module.exports = {
    AllRoutes : router
}