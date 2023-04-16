import { Army } from "../army";
import { Castle } from "../castle";
import { King } from "../king";
import { KingdomFactory } from "../kingdom_factory";
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
