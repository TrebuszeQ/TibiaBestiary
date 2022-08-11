import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsArrayComponent } from './locations-array.component';

describe('LocationsArrayComponent', () => {
  let component: LocationsArrayComponent;
  let fixture: ComponentFixture<LocationsArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
