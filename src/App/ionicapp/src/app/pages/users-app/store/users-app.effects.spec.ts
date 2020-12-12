import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsersAppEffects } from './users-app.effects';

describe('UsersAppEffects', () => {
  let actions$: Observable<any>;
  let effects: UsersAppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersAppEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UsersAppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
