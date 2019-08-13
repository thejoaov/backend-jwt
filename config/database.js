//Set up mongoose connection
console.log("in db config");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true
});

module.exports = mongoose;
/*const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/
