let mongoose = require('mongoose');

var problemSchema = new mongoose.Schema({
    problemType: { type: Number, required: true },
    url: { type: String, required: true },
    message: { type: String, required: true },
    stack: { type: String },
    createdAt: { type: Date }
});

module.exports = mongoose.model('problem', problemSchema);