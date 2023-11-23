import  {Character} from './domain';

export default class Game {
   start() {
      console.log('game started');
   }
}

export class GameSavingData {
}
export function readGameSaving() {
   console.log("Привет мир");
}

export function writeGameSaving() {
}