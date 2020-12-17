require("dotenv").config;
const mongoose = require("mongoose");

// Mongo connection
mongoose.connect("mongodb://127.0.0.1.27017/mernAuth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

// mongoose connection object
const db = mongoose.connection;
console.log(db);

// Set up an event listener that will fire when we connect
// log to term. what host and port we are on
db.once("open", () => {
  console.log(`connected to mongodb at ${db.host}:${db.port}`);
});
db.on("error", (error) => {
  console.log(`database error\n ${error}`);
});

module.exports.User = require("./User");
