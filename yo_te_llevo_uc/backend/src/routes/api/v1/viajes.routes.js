const express = require('express');

const db = require('../../../models');

const { Viajes } = db;

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        Viajes: {
            id: 1,
            nombre: 'Viaje 1',
            fecha: '2020-01-01',
            destino: 'Destino 1',
            hora: '12:00',
        }
    });
    })

    module.exports = router;
