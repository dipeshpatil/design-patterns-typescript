import { Army } from "./army";
import { Castle } from "./castle";
import { ElfKingdomFactory } from "../elf/elf_kingdom_factory";
import { King } from "./king";
import { KingdomFactory } from "./kingdom_factory";
import { OrcKingdomFactory } from "../orc/orc_kingdom_factory";

export enum KingdomType {
  ELF,
  ORC,
}

export class FactoryMaker {
  static makeFactory(kingdomType: KingdomType): KingdomFactory {
    switch (kingdomType) {
      case KingdomType.ELF:
        return new ElfKingdomFactory();
      case KingdomType.ORC:
        return new OrcKingdomFactory();
      default:
        throw new Error("KingdomType not supported.");
    }
  }
}

export class Kingdom {
  private castle!: Castle;
  private army!: Army;
  private king!: King;

  getCastle(): Castle {
    return this.castle;
  }

  getKing(): King {
    return this.king;
  }

  getArmy(): Army {
    return this.army;
  }

  setCastle(castle: Castle) {
    this.castle = castle;
  }

  setArmy(army: Army) {
    this.army = army;
  }

  setKing(king: King) {
    this.king = king;
  }
}
