import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from './drag-and-drop.component';

@NgModule({
  declarations: [
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  bootstrap: [DragAndDropComponent]
})
export class AppModule { }
