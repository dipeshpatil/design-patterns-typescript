import { Army } from "../kingdom/army";
import { Castle } from "../kingdom/castle";
import { King } from "../kingdom/king";
import { KingdomFactory } from "../kingdom/kingdom_factory";
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
