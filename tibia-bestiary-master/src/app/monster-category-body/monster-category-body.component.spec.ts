import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterCategoryBodyComponent } from './monster-category-body.component';

describe('MonsterCategoryBodyComponent', () => {
  let component: MonsterCategoryBodyComponent;
  let fixture: ComponentFixture<MonsterCategoryBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterCategoryBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterCategoryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
