import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterCategoryComponent } from './monster-category.component';

describe('MonsterCategoryComponent', () => {
  let component: MonsterCategoryComponent;
  let fixture: ComponentFixture<MonsterCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
