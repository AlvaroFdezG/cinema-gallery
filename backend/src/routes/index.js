const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes.js");

router.use("/user", userRouter);

module.exports = router;