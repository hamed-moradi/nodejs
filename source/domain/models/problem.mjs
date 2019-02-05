import mongoose from 'mongoose';

var problemSchema = new mongoose.Schema({
    problemType: { type: number, required: true },
    url: { type: string, required: true },
    message: { type: string, required: true },
    stack: { type: string },
    createdAt: { type: datetime }
});

export default mongoose.model('problem', problemSchema);