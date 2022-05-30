const express = require('express');

const router = express.Router();

const hello  = require('./api/v1/hello.routes');
const viajes = require('./api/v1/viajes.routes');

const register = require('./api/v1/users.routes')

router.use('/hello', hello);
router.use('/register', register)
router.post('/register', register);

router.use('/viajes', viajes);

module.exports = router;