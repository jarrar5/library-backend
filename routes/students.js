const bcryptjs = require("bcryptjs");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const { Student } = require("../models/student");



router.get("/", async (req, res) => {
  console.log("api/students/");
  res.send("Working");
});

router.post("/create", async (req, res) => {
  console.log("api/students/create");

    let student = new Student({
        name: req.body.name,
        rollNumber: req.body.rollNumber,
        email: req.body.email,
        phone: req.body.phone
    });
    student = await student.save();

    res.send(student);
});

router.get("/delete/:id", async (req, res) => {
  console.log("api/students/delete/:"+req.params.id);

    await Student.deleteOne({_id:req.params.id});

    res.status(200).send(req.params.id);
});

module.exports = router;
