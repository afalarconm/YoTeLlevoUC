const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User } = require("../../../models");
dotenv.config();

const { validateAddUserInput } = require("../../../utils/users");

const SALT_ROUNDS = 5;

// router.post("/add-user/", async (req, res) => {
//   if (validateAddUserInput(req.body)) {
//     const user = await User.create({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       fullName: `${req.body.firstName} ${req.body.lastName}`,
//     });
//     res.status(201).json(user);
//   } else {
//     res.status(400).json({ error: "Invalid input" });
//   }
// });

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
      console.log(user.dataValues);
      res.status(200).json({ usuario:user.dataV ,token: token });
    } else {
      res
        .status(400)
        .json({ error: "El usuario y la contraseña no coinciden" });
    }
  }
});

module.exports = router;