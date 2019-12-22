import mongoose from 'mongoose';

const connection = 'mongodb://localhost:27017/biavoo';
mongoose.connect(connection, { useNewUrlParser: true });

export default mongoose;