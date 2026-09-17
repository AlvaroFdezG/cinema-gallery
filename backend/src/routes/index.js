const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes.js");
const seatsRouter = require("./seatsRoutes.js");

router.use("/user", userRouter);
router.use("/seats", seatsRouter);

module.exports = router;