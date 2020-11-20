//jshint esversion:6

require('dotenv').config();
var express = require('express');
var app = express();

// var cookieParser = require("cookie-parser");
// app.use(cookieParser());

const register = require("./routes/register");
app.use("/",register);

app.listen(process.env.PORT || 3000,function(){
  console.log("Server running on post 3000"); 
});
