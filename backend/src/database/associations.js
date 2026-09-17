const Seat = require("./models/Seats")
const Room = require("./models/Rooms")

Room.hasMany(Seat, { foreignKey: "id_room" });
Seat.belongsTo(Room, { foreignKey: "id_room" });

module.exports = {
    Seat,
    Room
}