import { Coin } from "../coin";

export class SilverCoin implements Coin {
  static DESCRIPTION: string = "This is a silver coin.";

  getDescription(): string {
    return SilverCoin.DESCRIPTION;
  }
}
