const bcryptjs = require("bcryptjs");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("api/students/");
  res.send("Working");
});

module.exports = router;
