import { Action, createReducer, on } from '@ngrx/store';
import { ApplicationUser } from 'src/app/models/userapp.model';
import * as fromActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  userApp: ApplicationUser;
  isLoading: boolean;
  token: string;
}

export const initialState: State = {
  userApp: null,
  isLoading: false,
  token: null
};

export const reducer = createReducer(
  initialState,
  on(fromActions.setClaimsAuth, (state, { userApp, token }) => ({
    ...state,
    userApp,
    token,
    isLoading: false
  })),

  on(fromActions.setClaimsAuthFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  })),

);

