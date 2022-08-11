import { Component, OnInit } from '@angular/core';

import { Locations } from '../locations';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-locations-array',
  templateUrl: './locations-array.component.html',
  styleUrls: ['./locations-array.component.css']
})
export class LocationsArrayComponent implements OnInit
{

  constructor(private locationsService: LocationsService) { }

  locationsArray: Locations[] = [];
  ngOnInit(): void
  {
    this.getLocations();
    console.warn(this.locationsArray);
  }

  getLocations(): void
  {
    this.locationsService.fetchLocations().subscribe(locationsArray => {return this.locationsArray = locationsArray;})
  }
}
