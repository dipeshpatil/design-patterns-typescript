import { Coin } from "../coin";

export class GoldCoin implements Coin {
  static DESCRIPTION: string = "This is a gold coin.";

  getDescription(): string {
    return GoldCoin.DESCRIPTION;
  }
}
