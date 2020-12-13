import { Action, createReducer, on } from '@ngrx/store';
import { Account } from 'src/app/models/accounts.model';
import { MoveBalance } from 'src/app/models/movebalance.model';
import { MoveBalanceAccount } from 'src/app/models/movebalanceaccount.model';
import { TypeAccount } from 'src/app/models/typeaccount.model';
import * as fromActions from './accounts.actions';


export const accountsFeatureKey = 'accounts';

export interface State {
  account: Account;
  applicationUserId:string;
  accounts: Account[];
  error: any;
  isLoading: boolean;
  takeHave: MoveBalance;
  accountId: string;
  typeAccounts:TypeAccount[];
}

export const initialState: State = {
  account: null,
  accounts: [],
  error: null,
  isLoading: false,
  accountId: null,
  takeHave:null,
  typeAccounts:[],
  applicationUserId:null,
};

export const reducer = createReducer(
  initialState,
  on(fromActions.loadAccountss, (state, { applicationUserId }) => ({
    ...state,
    applicationUserId,
    isLoading: true
  })),
  on(fromActions.loadAccountssSuccess, (state, { accounts }) => ({
    ...state,
    accounts,
    isLoading: false
  })),
  on(fromActions.loadAccountssFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(fromActions.loadTypeAccounts, (state) => ({
    ...state,
    isLoading: true
  })),
  on(fromActions.loadTypeAccountsSucces, (state, { typeAccounts }) => ({
    ...state,
    typeAccounts,
    isLoading: false
  })),
  on(fromActions.loadTypeAccountsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),




  on(fromActions.create, (state, { account }) => ({
    ...state,
    account,
    isLoading: true
  })),
  on(fromActions.createSuccess, (state, { account }) => ({
    ...state,
    account,
    isLoading: false
  })),
  on(fromActions.createFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
 })),

 on(fromActions.takeHave, (state, { takeHave }) => ({
  ...state,
  takeHave,
  isLoading: true
})),
on(fromActions.takeHaveSuccess, (state, { account }) => ({
  ...state,
  account,
  isLoading: false
})),
on(fromActions.takeHaveFailure, (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
})),


);

