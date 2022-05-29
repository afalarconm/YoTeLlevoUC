const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");


const app = express();
const routes = require("./back/src/routes/index")
// view engine setup

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use[express.urlencoded({ extended : true})] ;
app.use(routes);
app.use(cookieParser());








module.exports  = app;