/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DinosaurService } from './dinosaur.service';

describe('Service: Dinosaur', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinosaurService]
    });
  });

  it('should ...', inject([DinosaurService], (service: DinosaurService) => {
    expect(service).toBeTruthy();
  }));
});
