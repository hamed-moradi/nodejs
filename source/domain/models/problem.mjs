import mongoose from 'mongoose';

var problemSchema = new mongoose.Schema({
    problemType: { type: Number, required: true },
    url: { type: String, required: true },
    message: { type: String, required: true },
    stack: { type: String },
    createdAt: { type: Date }
});

export default mongoose.model('problem', problemSchema);