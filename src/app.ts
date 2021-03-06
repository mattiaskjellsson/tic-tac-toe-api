import { Application } from 'express'
import cors from 'cors'
import express from 'express'
import { HighscoreController } from './highscore.controller';
import { HighscoreService } from './highscore.service';
import mongoose from "mongoose";

class App {
  public readonly app: Application

  constructor() {
    this.app = express()
    this.setConfig()
    this.setMongoConfig()
    this.setControllers()
  }

  private setConfig() {
    this.app.use(express.json({limit: '1mb'}))

    // 
    // const enableCORS = function(req, res, next) {
    //   res.header('Access-Control-Allow-Origin', '*');
    //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    //   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-Access-Token');
    //   if ('OPTIONS' == req.method) {
    //       return res.sendStatus(200);
    //   }
    //   next();
    // };
    // this.app.use(enableCORS);
    // 
    this.app.use(cors())
  }

  private setControllers() {
    const highscoreController = new HighscoreController(new HighscoreService())
    this.app.use('/highscore', highscoreController.router)
  }

  private setMongoConfig() {
    const mongo_name = process.env.NODE_ENV === 'production' ? process.env.MONGO_SERVICE_NAME : 'localhost'
    const mongo_port = process.env.MONGO_PORT
    const mongo_db = process.env.MONGO_DB
    const mongoUrl = `mongodb://${mongo_name}:${mongo_port}/${mongo_db}`
    
    mongoose.Promise = global.Promise
    
    mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
  }
}

export default new App().app