const express = require("express");

const dotenv = require("dotenv");

const router = express.Router();
const { User } = require("../../../models");
dotenv.config();



router.post("/users/", async (req, res) => {
  console.log("hola", req.body.params);

  const user = await User.findOne({
    where: { userName: req.body.params },
  })
  
  if (!user) {
    res.status(400).json({ error: "El usuario no existe" });
  } else {
      console.log(user.dataValues);
      res.status(200).json({ usuario:user.dataValues });
    }
});

router.put("/updateUser/", async (req, res) => {
  console.log("hola", req.body);

  const user = await User.findOne({
    where: { userName: req.body.username },
  })
  if (!user) {
    res.status(400).json({ error: "El usuario no existe" });
  } 
  else {
    if (req.body.password === req.body.passwordConfirmation) {
      user.update({
        userName: req.body.username,
        email: req.body.email
      })
    res.status(200).json({ usuario:user.dataValues });  }
    else {
      res.status(400).json({ error: "Las contraseñas no coinciden" });
    }
  }
});

router.delete('/DeleteUser/:id', (req, res) => {
  console.log("el body", req.params);
  try {
    let UserName = req.params.id;
    User.destroy({
      where: {
        userName: UserName
      }
    })
      .then(user => {
        res.status(200).json({ message: 'Usuario eliminado' })
    });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

module.exports = router;