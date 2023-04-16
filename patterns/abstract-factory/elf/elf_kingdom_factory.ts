import { Army } from "../kingdom/army";
import { Castle } from "../kingdom/castle";
import { King } from "../kingdom/king";
import { KingdomFactory } from "../kingdom/kingdom_factory";
import { ElfArmy } from "./elf_army";
import { ElfCastle } from "./elf_castle";
import { ElfKing } from "./elf_king";

export class ElfKingdomFactory implements KingdomFactory {
  createCastle(): Castle {
    return new ElfCastle();
  }

  createArmy(): Army {
    return new ElfArmy();
  }

  createKing(): King {
    return new ElfKing();
  }
}
