const express = require("express");
const router = express.Router();

//  Topic Model
const Topic = require("../../models/Topic");

// @route GET api/items
// @route GET All items
// @access Public

router.get("/", (_, res) => {
  Topic.find({})
    .sort({ createdAt: -1 })
    .then(items => {
      res.json(items);
    });
});
// @route Post api/topics
// @route Post All topic
// @access Public

router.post("/", (req, res) => {
  const newTopic = new Topic({ name: req.body.name });
  newTopic
    .save()
    .then(topic => res.json(topic))
    .catch(err => {
      res.status(400, "Bad Request");
    });
});

// @route DELETE api/topics/:id
// @route Delete a Topic
// @access Public

router.delete("/:id", (req, res) => {
  Topic.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
