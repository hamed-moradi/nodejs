import mongoose from 'mongoose';
import appSetting from '../../../assets/model/app-settings.js';

mongoose.connect(appSetting.connectionString.mongo, { useNewUrlParser: true });

export default mongoose;