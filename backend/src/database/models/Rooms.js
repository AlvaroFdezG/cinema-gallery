const sequelize = require("../connection.js");
const { Model, DataTypes } = require("sequelize");

class Room extends Model { };

Room.init(
    {
        id_room: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)

module.exports = Room;