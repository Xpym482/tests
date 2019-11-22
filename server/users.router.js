const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

/** Add something here*/
router.post("/register", (req, res) => {
  User.signup(req.body)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.send(err);
      });
});



module.exports = router;

