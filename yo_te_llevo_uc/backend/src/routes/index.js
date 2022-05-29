const express = require('express');

const router = express.Router();

const hello  = require('./api/v1/hello.routes');
const viajes = require('./api/v1/viajes.routes');

const register = require('./api/v1/users')

router.use('/hello', hello);
router.use('/Register', register)

router.use('/viajes', viajes);

module.exports = router;