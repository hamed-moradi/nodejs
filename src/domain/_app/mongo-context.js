
import mongoose from 'mongoose';
import config from '../../infrastructure/config.js';

mongoose.connect(config.connectionString.mongo, { useNewUrlParser: true });

export default mongoose;