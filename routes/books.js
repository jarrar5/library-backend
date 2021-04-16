const bcryptjs = require("bcryptjs");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const { Book } = require("../models/book");



router.get("/", async (req, res) => {
    console.log("api/book/");
    const booksList = await Book.find();
    res.status(200).send(booksList);
});

router.post("/create", async (req, res) => {
  console.log("api/books/create");

    let book = new Book({
        title: req.body.title,
        author: req.body.author,
    });
    book = await book.save();

    res.send(book);
});

router.delete("/delete/:id", async (req, res) => {
    console.log("api/books/delete/:"+req.params.id);

    await Book.deleteOne({_id:req.params.id});

    res.status(200).send(req.params.id);
});

router.post("/get/:id", async (req, res) => {
    console.log("api/books/get");

    let book = await Book.findById(req.params.id);

    res.send(book);
});

router.put("/update/:id", async (req, res) => {
  console.log("api/books/update");

    let book = {
        title: req.body.title,
        author: req.body.author,
    };
    console.log(book);
    console.log(req.params.id);
    
    book = await Book.findOneAndUpdate({_id:req.params.id},book,{new:true});

    res.send(book);
});
module.exports = router;
