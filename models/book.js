const Joi = require('joi');
const mongoose = require('mongoose');

const Book = mongoose.model('Book', new mongoose.Schema({
    title: {
        type: String,
        maxlength: 50
    },
    author: {
        type: String,
        maxlength: 50
    }
}));

exports.Book = Book; 