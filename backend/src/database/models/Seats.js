const sequelize = require("../connection.js");
const { Model, DataTypes } = require("sequelize");

class Seat extends Model { };

Seat.init(
    {
        id_seat: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        row: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_room: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)

module.exports = Seat;