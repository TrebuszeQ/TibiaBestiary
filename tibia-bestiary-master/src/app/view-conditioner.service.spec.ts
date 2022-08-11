import { TestBed } from '@angular/core/testing';

import { ViewConditionerService } from './view-conditioner.service';

describe('ViewConditionerService', () => {
  let service: ViewConditionerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewConditionerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
