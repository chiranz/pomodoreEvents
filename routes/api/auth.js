const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const auth = require("../../middleware/auth");

const jwtSecret = config.get("jwtSecret");

// @ Route get api/auth
// @desc Authenticates a user
// @access Public
router.post("/", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    // Validate Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        res.status(400).json({ msg: "Invalid Credentials" });
      } else {
        jwt.sign(
          { id: user.id },
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              id: user.id,
              name: user.name,
              email: user.email
            });
          }
        );
      }
    });
  });
});

// @ Route get api/auth/user
// @desc Get user data
// @access Private
router.get("/user", auth, (req, res) => {
  User.findById({ _id: req.user.id })
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;
