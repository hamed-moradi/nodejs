import mongoose from 'mongoose';

const connection = 'mongodb://192.168.188.128:27017/dandy_lady';
mongoose.connect(connection, { useNewUrlParser: true });

export default mongoose;