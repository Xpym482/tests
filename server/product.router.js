const express = require("express");
const router = express.Router();
const {Product} = require("./product.model.js");
const mongoose = require("mongoose");



router.get("/", async (req, res)=>{
  const xs = await Product.find({});
  res.send(xs);
});

router.get("/random", async (req, res)=>{
  const xs = await Product.find({});
  const r = getRandomInt(0, xs.length - 1);
  res.status(200).send(xs[r])
});

router.get("/similar/:productId", async (req, res)=>{
  const id = req.params.productId;
  const xs = await Product.find({});
  // console.log("equals", (xs[0]._id).toString() == id);
  // console.log(xs[0]);
  let findObj = xs.find(x => (x._id).toString() == id);
  const brandName = findObj.title.split(' ');
  const brand = brandName[0].join()
  console.log("find", brand);
  // const brand = xs.find(x => {
  //   console.log(typeof (x._id).toString());
  //   console.log(typeof id);
  //   return (x._id).toString() == req.param.productId;
  // });
  // console.log("brand name", brand);

  // res.status(200).send(product);
});

module.exports = router;

function getRandomInt(min, max) {// Product.find({_id: req.params.productId});
  // Product.find({'_id': (req.params.productId).toString()}, function (err, product) {
  //   if(err) return console.log("Error", err);
  //   console.log(req.params.productId);
  //   console.log(product);
  // });
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
