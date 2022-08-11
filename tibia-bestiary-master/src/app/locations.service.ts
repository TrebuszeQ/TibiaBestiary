import { Injectable } from '@angular/core';

import { Observable, observable, of } from 'rxjs';

import { Locations } from './locations';
import { locationsArray } from './locations-array';

@Injectable(
  {
    providedIn: 'root'
  })

export class LocationsService
{
  constructor() { }

  fetchLocations(): Observable <Locations[]>
  {
    return of(locationsArray);
  }
}
