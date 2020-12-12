import { Injectable } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import {AppState} from './app.reducer';
import * as fromUsersReducer from '../app/pages/users-app/store/users-app.reducer'
import * as fromLoginReducer from '../app/pages/login/store/login.reducer';
import * as fromAuthReducer from '../app/pages/auth/store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AppReducerService {

  constructor() { }

  getReducers(): ActionReducerMap<AppState>{
    return {
      userState : fromUsersReducer.reducer,
      loginState: fromLoginReducer.reducer,
      authState: fromAuthReducer.reducer,
    };
  }
}
