let mongoose = require('mongoose');

const connection = 'mongodb://192.168.188.128:27017/DandyLady';
mongoose.connect(connection, { useNewUrlParser: true });

module.exports = mongoose;