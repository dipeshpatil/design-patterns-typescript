import { Castle } from "../castle";

export class OrcCastle implements Castle {
  static DESCRIPTION = "This is the orc castle!";

  getDescription(): string {
    return OrcCastle.DESCRIPTION;
  }
}
