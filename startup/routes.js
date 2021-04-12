const express = require('express');
const students = require('../routes/students');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/students', students);
}