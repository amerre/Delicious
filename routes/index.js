const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const adri = { name: "Adri", age: 21, cool: true };
  // res.send("Hey! It works!");
  // res.json(adri);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render("hello", {
    name: "Adri",
    dog: req.query.dog
  });
});

router.get("/reverse/:name", (req, res) => {
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
