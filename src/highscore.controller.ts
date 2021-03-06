import { Request, Response, Router } from 'express'
import { HighscoreService } from './highscore.service';

export class HighscoreController {
  public router = Router()

  constructor(private service: HighscoreService) {
    this.setRoutes()
  }

  public async setRoutes() {
    this.router
    .get('/', async (req: Request, res: Response) => {
      const scorers = await this.service.getHighscorers()
      return res.send(scorers)
    })
    .post('/', async (req: Request, res: Response) => {
      console.log('post')
      console.log(req.body)
      return res.send(req.body)
    })
  }
}