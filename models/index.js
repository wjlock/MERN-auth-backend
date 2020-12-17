const mongoose = require("mongoose");

// Mongo connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

// mongoose connection object
const db = mongoose.connection;

// Set up an event listener that will fire when we connect
// log to term. what host and port we are on
db.once("open", () => {
  console.log(`connected to mongodb at ${db.host}:${db.port}`);
});
db.on("error", (error) => {
  console.log(`database error\n ${error}`);
});

module.exports.User = require("./User");
