import { Application } from 'express'
import cors from 'cors'
import express from 'express'
import { HighscoreController } from './highscore.controller';
import { HighscoreService } from './highscore.service';
import { connectDb } from './models/database'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

class App {
  public readonly app: Application

  constructor() {
    this.app = express()
    this.setConfig()
    connectDb()
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

}

export default new App().app