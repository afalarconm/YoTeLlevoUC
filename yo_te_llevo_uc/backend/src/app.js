const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const routes = require('/home/afalarconm/Tec. y App Web/Proyecto-IIC2513-1-grupo-23/yo_te_llevo_uc/backend/src/routes/index.js');

const errorHandler = require('./middlewares/errors/errorHandler.js');
const notFound = require('./middlewares/errors/notFound.js');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);

app.use(errorHandler);
app.use(notFound);


module.exports = app;