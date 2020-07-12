import {DragDropAtributos} from "./interface/drag-drop-atributos";

export class Animal implements DragDropAtributos {
  selecionado: boolean;

  constructor(
    public especie: string
  ) {
  }
}
