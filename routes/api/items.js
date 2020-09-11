const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
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
router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save();
  res.json(newItem);
});

//Delete Post
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
