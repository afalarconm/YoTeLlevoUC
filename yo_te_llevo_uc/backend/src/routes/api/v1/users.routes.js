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


module.exports = router;