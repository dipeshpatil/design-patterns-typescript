import { FactoryMaker, Kingdom, KingdomType } from "./kingdom";

const kingdom = new Kingdom();

function createKingdom(kingdomType: KingdomType) {
  const kingdomFactory = FactoryMaker.makeFactory(kingdomType);
  kingdom.setKing(kingdomFactory.createKing());
  kingdom.setCastle(kingdomFactory.createCastle());
  kingdom.setArmy(kingdomFactory.createArmy());
}

function run() {
  console.log("elf kingdom");
  createKingdom(KingdomType.ELF);
  console.log(kingdom.getKing().getDescription());
  console.log(kingdom.getCastle().getDescription());
  console.log(kingdom.getArmy().getDescription());

  console.log("orc kingdom");
  createKingdom(KingdomType.ORC);
  console.log(kingdom.getKing().getDescription());
  console.log(kingdom.getCastle().getDescription());
  console.log(kingdom.getArmy().getDescription());
}

run();
