import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApplicationUser } from '../../../models/userapp.model';
import { State } from '../store/auth.reducer';
import * as fromActions from '../store/auth.actions';
import { Observable } from 'rxjs';
import { getApplicationUser } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<State>) { }

  setClaimsAuth(userApp: ApplicationUser, token: string): void {
    this.store.dispatch(fromActions.setClaimsAuth({ userApp, token }));
  }

  getUserApp(): Observable<ApplicationUser> {
    return this.store.pipe(select(getApplicationUser));
  }
}
