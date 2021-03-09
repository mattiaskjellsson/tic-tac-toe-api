import mongoose from 'mongoose';
import { Highscore } from './highscore.model';
 
const connectDb = () => {
  const mongo_name = process.env.NODE_ENV === 'production' ? process.env.MONGO_SERVICE_NAME : 'localhost'
  const mongo_port = process.env.MONGO_PORT
  const mongo_db = process.env.MONGO_DB || 'Highscore'
  const mongo_user = process.env.MONGO_USER
  const mongo_pass = process.env.MONGO_PASS
  const mongo_admin_user = process.env.MONGO_ADMIN_USER
  const mongo_admin_pass = process.env.MONGO_ADMIN_PASS
  const mongoUrl = `mongodb://${mongo_name}:${mongo_port}/${mongo_db}`

  mongoose.Promise = global.Promise
  
  mongoose.connect(mongoUrl, {
    poolSize: 10,
    authSource: "admin",
    // user: mongo_user,
    // pass: mongo_pass, 
    user: mongo_admin_user,
    pass: mongo_admin_pass, 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  } );

  const db = mongoose.connection
  db.once('open', _ => {
    console.log('Database connected:', mongoUrl)
    console.log(db.collections)
  })

  db.on('error', err => {
    console.error('connection error:', err)
  })

  db.useDb(mongo_db)
};
 
const models = { Highscore };
 
export { connectDb };
export default models;