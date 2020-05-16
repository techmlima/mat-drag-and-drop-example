import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {

  /* De preferência criem classes para representar seus objetos */
  zoologicos = [
    { nome:'Zoo1', animais: ['Leão', 'Macaco'] },
    { nome:'Zoo2', animais: ['Tigre', 'Elefante'] }
  ];

  /* o resultado será uma lista com [Zoo1, Zoo2] */
  nomesDropList = [...this.zoologicos.map(zoo => zoo.nome)];

  /* 
   * Esta função é padrão, em qualquer exemplo no site do Angular Material você irá encontrá-la implementada deste modo. 
   * Pelo menos até este momento :D! 
   */
  drop(event: CdkDragDrop<any[]>) {    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
