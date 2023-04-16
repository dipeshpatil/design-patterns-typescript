import { Army } from "../kingdom/army";

export class OrcArmy implements Army {
  static DESCRIPTION = "This is the orc army!";

  getDescription(): string {
    return OrcArmy.DESCRIPTION;
  }
}
