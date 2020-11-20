//jshint esversion:6

require('dotenv').config();
let express = require('express');
let app = express();

const sequelize =  require("./startup/dbconfig")();
// var cookieParser = require("cookie-parser");
// app.use(cookieParser());

const register = require("./routes/register");
app.use("/", register);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

app.listen(process.env.PORT || 7000, function () {
  console.log("Server running on post 7000");
  testConnection();
});
