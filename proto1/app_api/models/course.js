var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
  name: String,
  rating: {type: Number, 'default': 0, min: 0, max: 5},
  addres: String,
  levels: {type: [Number]},
  location: {type: [Number], index: '2dsphere'},
  insertDate: {type: Date, 'default': Date.now},
  startDate: {type: [Date], required: true},
  endDate: {type: [Date],required: true}
});

mongoose.model('Course',courseSchema,'CPD');