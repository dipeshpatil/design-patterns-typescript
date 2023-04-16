import { CoinType } from "./coin_type";

import { CopperCoin } from "./coins/copper_coin";
import { SilverCoin } from "./coins/silver_coin";
import { GoldCoin } from "./coins/gold_coin";

export class CoinFactory {
  static getCoin(coinType: CoinType) {
    switch (coinType) {
      case CoinType.CopperCoin:
        return new CopperCoin();
      case CoinType.SilverCoin:
        return new SilverCoin();
      case CoinType.GoldCoin:
        return new GoldCoin();
      default:
        throw new Error("Invalid Coin.");
    }
  }
}
