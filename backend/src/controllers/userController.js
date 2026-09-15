const userService = require("../services/userService.js");

const getTec = (req, res) => {
    res.status(200).json({
        "status": "OK",
        "message": "Hello World"
    });
}

module.exports = {
    getTec
}