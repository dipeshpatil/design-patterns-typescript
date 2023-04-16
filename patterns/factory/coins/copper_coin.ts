import { Coin } from "../coin";

export class CopperCoin implements Coin {
  static DESCRIPTION: string = "This is a copper coin.";

  getDescription(): string {
    return CopperCoin.DESCRIPTION;
  }
}
