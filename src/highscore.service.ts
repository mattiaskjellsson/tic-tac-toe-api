import { Highscore } from './models/highscore.model';

export class HighscoreService {
  public async getHighscorers() {    
    const scorers = await Highscore.find().lean()
    console.log(scorers)
    return scorers;

    return [
      { id: '1', name: 'Ni putu', wins: 10 },
      { id: '2', name: 'Santi A', wins: 9 },
      { id: '3', name: 'Winston', wins: 8 },
      { id: '4', name: 'Churchill', wins: 7},
      { id: '5', name: 'Maputu', wins: 4 },
      { id: '6', name: 'Kolkata united', wins: 2},
    ]
  }

  public async createHighscore(scorer: { name: string, wins: number}) {
    const hs = new Highscore(scorer);
    const saved = await hs.save()
    return saved
  }

}