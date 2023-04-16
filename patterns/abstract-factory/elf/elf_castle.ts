import { Castle } from "../kingdom/castle";

export class ElfCastle implements Castle {
  static DESCRIPTION = "This is the elven castle!";

  getDescription(): string {
    return ElfCastle.DESCRIPTION;
  }
}
