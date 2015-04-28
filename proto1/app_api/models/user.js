var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  address: {type: String},
  dateOfBirth: {type: Date},
  pass: {type: String},
  CPD: {type: [Number]},
  CPDdates: {type: [Date]},
  email: {type: String, required: true},
  courses: {type: [Number]} //ids of finished courses
});

mongoose.model('User',userSchema,'CPD');