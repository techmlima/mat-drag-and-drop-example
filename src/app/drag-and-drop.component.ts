import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Zoologico} from "./model/zoologico";
import {Animal} from "./model/animal";

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {

  zoologicos = [
    new Zoologico('Zoo1', [new Animal('Leão'), new Animal('Macaco'), new Animal('Girafa')]),
    new Zoologico('Zoo2', [new Animal('Tigre'), new Animal('Elefante'), new Animal('Zebra')])
  ];

  /**
   * Nome único para cada DropList, utilizamos o nome do zoológico
   */
  nomesDropList = [...this.zoologicos.map(zoo => zoo.nome)];

  /**
   * Ao clicar em um animal dispara este evento, se o control estiver pressionado então
   * marca/desmarca o animal como selecionado
   * @param e
   * @param animal
   */
  selecionarAnimal(e: Event, animal: Animal) {
    if ((<KeyboardEvent>e).ctrlKey) {
      animal.selecionado = !animal.selecionado;
    }
  }

  /**
   * Recebe o evento de cdkDropListDropped, captura a lista de animais do container atual e filtra pelos animais selecinados,
   * Caso tenham animais selecionados então os mesmos serão movidos
   * @param event
   */
  dropItems(event: CdkDragDrop<Array<Animal>>) {
    let animais: Array<Animal> = event.previousContainer.data;
    let animaisSelecionados = animais.filter(a => a.selecionado);

    if (animaisSelecionados.length > 1) {
      animaisSelecionados.forEach((animal, index) => {
        this.drop(event, animais.indexOf(animal), index);
      });
    } else {
      this.drop(event, -1, 0);
    }

    this.finalizarArrasto();
  }

  /**
   * Quando o indiceAnterior for maior que -1 então significa que uma lista de animais selecionados esta sendo movida,
   * a variável agregarAoIndiceAtual é sempre o indice da lista de animais selecionados do item que esta sendo passado.
   *
   * @param event do tipo cdkDropListDropped
   * @param indiceAnterior -1 como escape para comportamento default
   * @param agregarAoIndiceAtual 0 como escape para comportamento default
   */
  drop(event: CdkDragDrop<Array<Animal>>, indiceAnterior: number, agregarAoIndiceAtual: number) {
    const previous = indiceAnterior > -1 ? indiceAnterior : event.previousIndex;
    const current = event.currentIndex + agregarAoIndiceAtual;

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        previous,
        current > previous ? current : event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        previous,
        current
      );
    }
  }

  /**
   * Adiciona como selecionado o animal que for arrastado, dessa forma garantimos que não aconteça o erro de selecionar
   * um, arrastar outro e o selecionado ficar para traz
   * @param animal
   */
  prepararArrasto(animal: Animal) {
    animal.selecionado = true;
  }

  /**
   * Altera para false o valor do atributo selecionado de todos os animais
   */
  finalizarArrasto() {
    this.zoologicos.forEach(zoo =>
      zoo.animais.forEach(animal => animal.selecionado = false)
    );
  }
}
