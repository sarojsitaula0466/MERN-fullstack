const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// Get Posts
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => err);
});

//Add post
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    price: req.body.price,
  });
  newItem.save();
  res.json(newItem);
});

//Delete Post
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
