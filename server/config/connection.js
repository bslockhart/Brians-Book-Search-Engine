const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://192.168.1.11:3000/brians-book-search-engine", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).catch((err) => {
  console.error(err);
})

module.exports = mongoose.connection;