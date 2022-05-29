const express = require('express');

const router = express.Router();

const hello  = require('./api/v1/hello.routes');
const viajes = require('./api/v1/viajes.routes');

router.use('/hello', hello);

router.use('/viajes', viajes);

module.exports = router;