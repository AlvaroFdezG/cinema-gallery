const sequelize = require("../connection.js");
const { Model, DataTypes } = require("sequelize");

class Room extends Model { };

Room.init(
    {
        id_room: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }
)

module.exports = Room;