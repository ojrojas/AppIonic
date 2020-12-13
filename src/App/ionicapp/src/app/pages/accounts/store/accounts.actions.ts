import { createAction, props } from '@ngrx/store';
import { Account } from 'src/app/models/accounts.model';
import { MoveBalance } from 'src/app/models/movebalance.model';
import { TypeAccount } from 'src/app/models/typeaccount.model';

export const loadAccountss = createAction(
  '[Accounts] Load Accountss',
  props<{ applicationUserId: string }>()
);

export const loadAccountssSuccess = createAction(
  '[Accounts] Load Accountss Success',
  props<{ accounts: Account[] }>()
);

export const loadAccountssFailure = createAction(
  '[Accounts] Load Accountss Failure',
  props<{ error: any }>()
);

export const create = createAction(
  '[Accounts] createAccount',
  props<{ account: Account }>()
);

export const createSuccess = createAction(
  '[Accounts] createAccount Success',
  props<{ account: Account }>()
);

export const createFailure = createAction(
  '[Accounts] createAccount Failure',
  props<{ error: any }>()
);

export const update = createAction(
  '[Accounts] UpdateAccount',
  props<{ account: Account }>()
);

export const updateSuccess = createAction(
  '[Accounts] UpdateAccount Success',
  props<{ account: Account }>()
);

export const updateFailure = createAction(
  '[Accounts] UpdateAccount Failure',
  props<{ error: any }>()
);

export const takeHave = createAction(
  '[Accounts] TakeHaveAccount',
  props<{ takeHave: MoveBalance }>()
);

export const takeHaveSuccess = createAction(
  '[Accounts] TakeHaveAccount Success',
  props<{ account: Account }>()
);

export const takeHaveFailure = createAction(
  '[Accounts] TakeHaveAccount Failure',
  props<{ error: any }>()
);

export const loadTypeAccounts = createAction(
  '[Accounts] Load TypeAccounts'
);

export const loadTypeAccountsSucces = createAction(
  '[Accounts] Load TypeAccounts success',
  props<{ typeAccounts: TypeAccount[] }>()
);

export const loadTypeAccountsFailure = createAction(
  '[Accounts] Load TypeAccounts Failure',
  props<{ error: any }>()
);



