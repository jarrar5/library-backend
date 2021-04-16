const Joi = require('joi');
const mongoose = require('mongoose');

const Book = mongoose.model('Book', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  author: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

exports.Book = Book; 