import { Component, Input, OnInit } from '@angular/core';
import { Dinosaur } from '../dinosaur';

@Component({
  selector: 'app-dinosaur-detail',
  templateUrl: './dinosaur-detail.component.html',
  styleUrls: ['./dinosaur-detail.component.css']
})
export class DinosaurDetailComponent implements OnInit {

  @Input() dinosaurDetail!: Dinosaur;

  constructor() { }

  ngOnInit() {
  }

}
