import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dinosaur } from './dinosaur';

@Injectable({
  providedIn: 'root'
})
export class DinosaurService {

  private apiUrl: string = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/main/dinosaurs.json';

  getDinosaurs(): Observable<Dinosaur[]> {
    return this.http.get<Dinosaur[]>(this.apiUrl);
  }


constructor(private http: HttpClient) { }

}
