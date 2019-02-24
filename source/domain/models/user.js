let mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: { type: String, required: true, max: 32 },
    name: { type: String, required: true, max: 128 },
    family: { type: String, required: true, max: 256 },
    password: { type: String, max: 32 }
});

module.exports = mongoose.model('User', userSchema);