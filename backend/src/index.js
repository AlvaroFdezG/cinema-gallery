const bodyParser = require("body-parser")
const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

const router = require("./routes/index.js");
// const sequelize = require("./database/conection.js");
app.use(cors(
    {
        origin: "http://localhost:5173"
    }
));
app.use("/api/v1", router)

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});