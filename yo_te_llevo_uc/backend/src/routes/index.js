const express = require('express');

const router = express.Router();

const hello  = require('./api/v1/hello.routes');

router.use('/hello', hello);

module.exports = router;