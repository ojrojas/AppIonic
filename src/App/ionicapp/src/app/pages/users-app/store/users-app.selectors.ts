import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './users-app.reducer';

export const getStateUserApps = createFeatureSelector<fromReducer.State>(fromReducer.usersAppFeatureKey);

export const getApplicationUsers = createSelector(
    getStateUserApps,
    (state) => state.applicationUsers
);

