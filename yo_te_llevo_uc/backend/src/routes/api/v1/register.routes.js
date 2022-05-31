const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User } = require("../../../models");
dotenv.config();

const { validateAddUserInput } = require("../../../utils/users");

const SALT_ROUNDS = 5;

router.post("/register/", async (req, res) => {
  try {
    if (req.body.password === req.body.passwordConfirmation) {
      const existingUser = await User.findOne({
        where: { userName: req.body.username },
      });
      if (existingUser) {
        res.status(400).json({ error: "Username en uso" });
      } else {
        const hashedPassword = await bcrypt.hash(
          req.body.password,
          SALT_ROUNDS
        );
        const user = await User.create({
          userName: req.body.username,
          email: req.body.email,
          password: hashedPassword,
        });
        res.status(201).json(user);
        // console.log(user.userName);
      }
    } else {
      res.status(400).json({ error: "Contraseñas no coinciden" });
    }
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

module.exports = router;