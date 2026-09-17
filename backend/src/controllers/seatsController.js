const seatsService = require("../services/seatsService.js");

const getSeats = (req, res) => {
    const seats = seatsService.getSeats();

    res.status(200).json({
        "status": "OK",
        "data": seats
    });
}

module.exports = {
    getSeats
}