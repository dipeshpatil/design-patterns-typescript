import { CoinFactory } from "../coin_factory";
import { CoinType } from "../coin_type";
import { GoldCoin } from "../coins/gold_coin";

describe("CoinFactory", () => {
  it("shouldReturnGoldCoinInstance", () => {
    const goldCoin = CoinFactory.getCoin(CoinType.GoldCoin);
    expect(goldCoin instanceof GoldCoin);
  });
});
