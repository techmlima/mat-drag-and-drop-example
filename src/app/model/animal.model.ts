import {DragDropAtributos} from "./interface/drag-drop-atributos";

export class AnimalModel implements DragDropAtributos {
  selecionado: boolean;

  constructor(
    public especie: string
  ) {
  }
}
