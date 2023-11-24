import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinosaurComponent } from './dinosaur.component';
import { DinosaurListComponent } from './dinosaur-list/dinosaur-list.component';
import { DinosaurDetailComponent } from './dinosaur-detail/dinosaur-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DinosaurListComponent],
  declarations: [DinosaurComponent, DinosaurListComponent, DinosaurDetailComponent]
})
export class DinosaurModule { }
