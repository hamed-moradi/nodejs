
import mongoose from 'mongoose';
import appSetting from '../../../app-settings.js';

mongoose.connect(appSetting.connectionString.mongo, { useNewUrlParser: true });

export default mongoose;