import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {

  zoologicos = [
    { nome:'Zoo1', animais: ['Leão', 'Macaco'] },
    { nome:'Zoo2', animais: ['Tigre', 'Elefante'] }
  ];

  nomesBlocos = [...this.zoologicos.map(zoo => zoo.nome)];

  drop(event: CdkDragDrop<any[]>) {
    console.log(this.nomesBlocos);
    
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
