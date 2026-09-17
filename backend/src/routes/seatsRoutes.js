const express = require("express");
const seatsRouter = express.Router();
const seatsController = require("../controllers/seatsController.js");

seatsRouter.get("/", seatsController.getSeats);

module.exports = seatsRouter;