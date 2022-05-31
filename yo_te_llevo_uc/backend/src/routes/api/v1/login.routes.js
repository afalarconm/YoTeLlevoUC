const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User } = require("../../../models");
dotenv.config();

router.post("/login/", async (req, res) => {
    console.log("aca llego",req.body.params.username);
  
    const user = await User.findOne({
      where: { userName: req.body.params.username },
    });
    if (!user) {
      res.status(400).json({ error: "El usuario y la contraseña no coinciden" });
    } else {
      const result = bcrypt.compareSync(req.body.params.pass, user.password);
      if (result) {
        const token = jwt.sign(
          {
            userName: user.username,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "1800s",
          }
        );
        console.log(user.dataValues.userName);
        res.status(200).json({ usuario:user.dataValues.userName ,token: token });
      } else {
        res
          .status(400)
          .json({ error: "El usuario y la contraseña no coinciden" });
      }
    }
  });
  
  module.exports = router;