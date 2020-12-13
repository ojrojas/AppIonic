import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './accounts.reducer';

export const getStateAccounts = createFeatureSelector<fromReducer.State>(fromReducer.accountsFeatureKey);

export const getAccounts = createSelector(
    getStateAccounts,
    (state) => state.accounts
);

export const getCheckedNumberAccount = createSelector(
    getStateAccounts,
    (state) => state.checkedAccount
);
