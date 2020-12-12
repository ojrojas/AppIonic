import { TestBed } from '@angular/core/testing';

import { AppReducerService } from './app-reducer.service';

describe('AppReducerService', () => {
  let service: AppReducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppReducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
