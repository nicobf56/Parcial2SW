import { Component, OnInit } from '@angular/core';
import { Dinosaur } from '../dinosaur';
import { DinosaurService } from '../dinosaur.service';
import { DinosaurDetailComponent } from '../dinosaur-detail/dinosaur-detail.component';


@Component({
  selector: 'app-dinosaur-list',
  templateUrl: './dinosaur-list.component.html',
  styleUrls: ['./dinosaur-list.component.css']
})
export class DinosaurListComponent implements OnInit {

  dinosaurs: Array<Dinosaur> = [];

  selected: boolean = false;
  selectedDinosaur!: Dinosaur;

  carnivorosNum: number = 0;
  herbivorosNum: number = 0;

  constructor(private dinosaurService:DinosaurService) { }

  getDinosaurs(): void{
    this.dinosaurService.getDinosaurs().subscribe((dinosaurs) => {
      this.dinosaurs = dinosaurs;
    });
  }

  getCarnivoros(): void{
    let carnivoros: number = 0;
    this.dinosaurService.getDinosaurs().subscribe((dinosaurs) =>{
      dinosaurs.forEach(dinosaur => {
        if(dinosaur.feeding === "Carnivoro") {
          carnivoros += 1;
        }
      })
      this.carnivorosNum = carnivoros
    });



  }

  getHerbivoros(): void{
    let herbivoros: number = 0;
    this.dinosaurService.getDinosaurs().subscribe((dinosaurs) =>{
      dinosaurs.forEach(dinosaur => {
        if(dinosaur.feeding === "Herbivoro") {
          herbivoros += 1;
        }
      })
      this.herbivorosNum = herbivoros
    });
  }

  onSelected(dinosaur: Dinosaur): void{
      this.selected = true;
      this.selectedDinosaur = dinosaur;

  }

  ngOnInit() {
    this.getDinosaurs();
    this.getCarnivoros();
    this.getHerbivoros();
  }

}
