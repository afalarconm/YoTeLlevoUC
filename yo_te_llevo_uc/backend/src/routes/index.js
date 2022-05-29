const express = require('express');

const router = express.Router();

const hello  = require('./api/v1/hello.routes');

const register = require('./api/v1/users')

router.use('/hello', hello);
router.use('/Register', register)

module.exports = router;