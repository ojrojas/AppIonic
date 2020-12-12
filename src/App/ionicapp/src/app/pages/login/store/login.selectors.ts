import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './login.reducer';

export const getLoginState = createFeatureSelector<fromReducer.State>(fromReducer.loginFeatureKey);


export const IsLogged = createSelector(
    getLoginState,
    (state) => state.isLogged
);
