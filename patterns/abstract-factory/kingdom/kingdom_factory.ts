import { Army } from "./army";
import { Castle } from "./castle";
import { King } from "./king";

export interface KingdomFactory {
  createCastle(): Castle;

  createKing(): King;

  createArmy(): Army;
}
