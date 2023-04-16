import { King } from "../kingdom/king";

export class ElfKing implements King {
  static DESCRIPTION = "This is the elven king!";

  getDescription(): string {
    return ElfKing.DESCRIPTION;
  }
}
