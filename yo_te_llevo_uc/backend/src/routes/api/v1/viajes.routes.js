const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { Viaje } = require("../../../models");
dotenv.config();
const { validateAddViajeInput } = require("../../../utils/viajes");

router.post("/CreateViaje/", async (req, res) => {
    try {   
      console.log(req.body) 
      if (validateAddViajeInput(req.body)){
        const viaje = await Viaje.create({
          origen: req.body.origen,
          destino: req.body.destino,
          cupos: req.body.cupos,
          hora_inicio: req.body.hora_inicio,
          detalles: req.body.comentarios,
          activo: true,
        });
        res.status(201).json(viaje);
        } else {
          res.status(400).json({ error: "Invalid input"})
        }
    } catch (e) {
      res.status(400).json({ error: e });
    }
  });

router.get('/viajes', (req, res) => {
  try {
    Viaje.findAll()
      .then(viajes => {
        console.log(viajes)
    });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});
module.exports = router;
