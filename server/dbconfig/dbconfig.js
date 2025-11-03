const mongoose = require('mongoose');

// Connect to local MongoDB 'dbpractice' database
const conUrl = "mongodb://127.0.0.1:27017/dbpractice";

mongoose.connect(conUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully to dbpractice');
})
.catch(err => {
  console.error('Connection error:', err);
});