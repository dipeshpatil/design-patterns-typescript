import { Army } from "../army";

export class ElfArmy implements Army {
  static DESCRIPTION = "This is the elven army!";

  getDescription(): string {
    return ElfArmy.DESCRIPTION;
  }
}
