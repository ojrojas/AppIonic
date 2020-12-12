import { createReducer, on } from '@ngrx/store';
import * as fromActions from './login.actions';

export const loginFeatureKey = 'login';

export interface State {
  isLoading: boolean;
  token: string;
  error: any;
  isLogged: boolean;
}

export const initialState: State = {
  isLoading: false,
  token: null,
  error: null,
  isLogged: false
};


export const reducer = createReducer(
  initialState,

  on(fromActions.login, (state) => ({
    ...state,
    isLoading: true
  })),
  on(fromActions.loginSuccess, (state, { token }) => ({
    ...state,
    token,
    isLogged: true,
    isLoading: false
  })),
  on(fromActions.OnError, (state, { error }) => ({
    ...state,
    error,
    isLogged: false,
    isLoading: false
  })),

);

