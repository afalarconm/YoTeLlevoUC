const express = require('express');

const router = express.Router();

const hello  = require('./api/v1/hello.routes');
const viajes = require('./api/v1/viajes.routes');

const register = require('./api/v1/register.routes');
const login = require('./api/v1/login.routes');

const users = require('./api/v1/users.routes');


router.use('/hello', hello);

router.use('/register', register)
router.post('/register', register);

router.use('/login', login)
router.post('/login', login);

router.use('/users', users)
router.post('/users', users);
router.get('/users', users);
router.put('/updateUser', users);


router.use('/viajes', viajes);
router.get('/viajes', viajes);
router.post('/viajes', viajes);
router.get('/viajes/:id', viajes);
router.put('/viajes/:id', viajes);
router.delete('/viajes/:id', viajes);

router.use('/CreateViaje', viajes);
router.post('/CreateViaje', viajes);
router.get('/CreateViaje', viajes);

module.exports = router;