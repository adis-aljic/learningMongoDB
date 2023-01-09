const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail, isStrongPassword } = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    minlength: [2, 'You must enter first name between 2 and 20 characters'],
    maxlength: [20, 'You must enter first name between 2 and 20 characters'],
    required: [true, 'You must enter first name'],
  },
  last_name: {
    type: String,
    minlength: [2, 'You must enter last name between 2 and 20 characters'],
    maxlength: [20, 'You must enter last name between 2 and 20 characters'],
    required: [true, 'You must enter last name'],
  },
  email: {
    type: String,
    required: [true, 'You must enter email'],
    trim: true,
    lowercase: true,
    validate: [isEmail, 'Invalid email, please enter correct email'],
    index: true,
    unique: true,
  },
  username: {
    type: String,
    minlength: [2, 'You must enter username between 2 and 40 characters'],
    maxlength: [40, 'You must enter username between 2 and 40 characters'],
    required: [true, 'You must enter username'],
    trim: true,
    lowercase: true,
    index: true,
    unique: true,
  },
  password: String,
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);
