const express = require("express");
const auth = require("../../middleware/auth");
const router = express.Router();

//  Topic Model
const Topic = require("../../models/Topic");

// @route GET api/items
// @route GET All User items
// @access Private

router.get("/", auth, (req, res) => {
  Topic.find({ userId: req.user.id })
    .sort({ createdAt: -1 })
    .then(items => {
      res.json(items);
    });
});
// @route Post api/topics
// @route Post All topic
// @access Private

router.post("/", auth, (req, res) => {
  console.log(req.user);
  const newTopic = new Topic({ name: req.body.name, userId: req.user.id });
  newTopic
    .save()
    .then(topic => res.json(topic))
    .catch(err => {
      res.status(400, "Bad Request");
    });
});

// @route DELETE api/topics/:id
// @route Delete a Topic
// @access Private

router.delete("/:id", auth, (req, res) => {
  Topic.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
