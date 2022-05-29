const express = require('express');

const router = express.Router();

const hello  = require('/home/afalarconm/Tec. y App Web/Proyecto-IIC2513-1-grupo-23/yo_te_llevo_uc/backend/src/routes/api/v1/hello.routes.js');

router.use('/hello', hello);

module.exports = router;