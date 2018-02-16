import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Developer } from './developer';
import { DEVELOPERS } from './mock-developers';

@Injectable()
export class DeveloperService {

  constructor() { }

  getDevelopers(): Observable<Developer[]> {
    return of(DEVELOPERS);
  }

  getDeveloper(id: number): Observable<Developer> {
    return of(DEVELOPERS.find(developer => developer.id === id));
  }

  addDeveloper (developer: Developer): Observable<Developer> {
    DEVELOPERS.push(developer);
    return of(developer);
  }

}
