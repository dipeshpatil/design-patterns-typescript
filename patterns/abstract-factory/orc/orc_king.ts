import { King } from "../kingdom/king";

export class OrcKing implements King {
  static DESCRIPTION = "This is the orc king!";

  getDescription(): string {
    return OrcKing.DESCRIPTION;
  }
}
