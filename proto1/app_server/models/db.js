var mongoose = require('mongoose');
var dbURI ='mongodb://localhost/CPD';
mongoose.connect(dbURI);
// if(process.env.NODE_ENV === 'production'){
//   dbURL = process.env.MONGOLAB_URI_CPD;
// }