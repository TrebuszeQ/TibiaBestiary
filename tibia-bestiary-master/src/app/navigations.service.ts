import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Navigations } from './navigations';
import { navigationsArray } from './navigations-array';

@Injectable({
  providedIn: 'root'
})
export class NavigationsService
{
  constructor() { }

  getNavigationsArray(): Observable <Navigations[]>
  {
    return of(navigationsArray);
  }
}
