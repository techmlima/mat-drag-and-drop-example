import {AnimalModel} from "./animal.model";

export class ZoologicoModel {
  constructor(
    public nome: string,
    public animais: Array<AnimalModel>
  ) {
  }
}
