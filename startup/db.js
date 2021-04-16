const mongoose = require('mongoose');

module.exports = function() {

    const db = process.env.DB_URI;

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to Database Successfully...`))
    .catch("Database Connection Unsuccessfull");
}