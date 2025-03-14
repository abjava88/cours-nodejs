const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema);