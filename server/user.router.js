const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});


router.post("/register", (req, res) => {
  User.signup(req.body)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.send(err);
      });
});

/** User with own personal code*/
router.post("/code", (req, res) => {
    User.code(req.body)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.send(err);
        });
});

router.get("/onlineCode", (req, res) => {
    // console.log(req);
    const random = Math.ceil(Math.random() * 11);
    res.send(random.toString());
});



module.exports = router;

