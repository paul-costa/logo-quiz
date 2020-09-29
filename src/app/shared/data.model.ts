export interface GameData {
    noOfGame,
    playerOneScore: number,
    playerTwoScore: number,
  }


export class LogoClass {
  constructor(
    public filename: string,
    public solution: string,
    public options: string[],
    ) {}
}