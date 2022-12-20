const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

module.exports = mongoose
  .connect('mongodb://localhost:27017/bild_login')
  .then(() => console.log('Connected!'));
