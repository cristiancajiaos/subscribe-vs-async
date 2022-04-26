import { ObjectModel } from './../shared/interfaces/object-model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor() { }

  getAllObjects(): Observable<ObjectModel[]> {
    return of([
      {
        id: 1,
        name: 'Object One'
      },
      {
        id: 2,
        name: 'Object Two'
      }
    ])
  }
}
