const mongoose = require('mongoose');

module.exports = function() {
  const db = "mongodb+srv://admin:mongo@500@studentsmanagement.nmwjg.mongodb.net/studentsManagement?retryWrites=true&w=majority";
  console.log(db);
  mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to ${db}...`));
}