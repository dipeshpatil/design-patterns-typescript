import { CoinFactory } from "./coin_factory";
import { CoinType } from "./coin_type";

// Creating a copper coin
const copperCoin = CoinFactory.getCoin(CoinType.CopperCoin);
console.log(copperCoin.getDescription());

const silverCoin = CoinFactory.getCoin(CoinType.SilverCoin);
console.log(silverCoin.getDescription());

const goldCoin = CoinFactory.getCoin(CoinType.GoldCoin);
console.log(goldCoin.getDescription());
