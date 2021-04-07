import { TestBed } from '@angular/core/testing';

import { SkywalkerService } from './skywalker.service';

describe('SkywalkerService', () => {
  let service: SkywalkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkywalkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
