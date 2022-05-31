const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { Viaje } = require("../../../models");
dotenv.config();

router.post("/CreateViaje/", async (req, res) => {
    try {     
            const viaje = await Viaje.create({
                origen: req.body.origen,
                destino: req.body.destino,
                cupos: req.body.cupos,
                hora_inicio: req.body.hora_inicio,
                detalles: req.body.comentarios,
                activo: true,
          });
          console.log(viaje); 
          res.status(201).json(viaje);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  });
module.exports = router;
