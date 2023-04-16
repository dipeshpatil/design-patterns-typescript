import { Army } from "../army";
import { Castle } from "../castle";
import { King } from "../king";
import { KingdomFactory } from "../kingdom_factory";
import { OrcArmy } from "./orc_army";
import { OrcCastle } from "./orc_castle";
import { OrcKing } from "./orc_king";

export class OrcKingdomFactory implements KingdomFactory {
  createCastle(): Castle {
    return new OrcCastle();
  }

  createArmy(): Army {
    return new OrcArmy();
  }

  createKing(): King {
    return new OrcKing();
  }
}
