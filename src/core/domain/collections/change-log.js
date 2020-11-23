import mongoose from 'mongoose';

var changeLogSchema = new mongoose.Schema({
    entity: { type: string, required: true, max: 32 },
    entityId: { type: number, required: true },
    actionType: { type: number, required: true },
    description: { type: string }
});

export default mongoose.model('changeLog', changeLogSchema);