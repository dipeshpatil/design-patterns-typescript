import { Castle } from "../castle";

export class ElfCastle implements Castle {
  static DESCRIPTION = "This is the elven castle!";

  getDescription(): string {
    return ElfCastle.DESCRIPTION;
  }
}
