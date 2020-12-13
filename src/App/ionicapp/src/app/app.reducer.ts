import { inject, InjectionToken } from '@angular/core';
import {  ActionReducerMap, createSelector } from '@ngrx/store';
import { AppReducerService} from './app-reducer.service';
import * as fromUserAppReducer from '../app/pages/users-app/store/users-app.reducer';
import * as fromLoginReducer from '../app/pages/login/store/login.reducer';
import * as fromAuthReducer from '../app/pages/auth/store/auth.reducer';
import * as fromAccountReducer from '../app/pages/accounts/store/accounts.reducer';

export interface AppState {
    userState: fromUserAppReducer.State;
    loginState: fromLoginReducer.State;
    authState: fromAuthReducer.State;
    accountsState:fromAccountReducer.State;
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>
('Registered reducers', {
    factory: () => {
        const serv = inject(AppReducerService);
        return serv.getReducers();
    }
});

export const getAppStateLoginState = (state: AppState) => state.loginState;

export const getAppStateLoginData = createSelector(
    getAppStateLoginState,
    (state) => state
);
