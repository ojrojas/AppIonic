import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { RoutesApis } from 'src/app/core/apis/api.routes';
import { ApiService } from 'src/app/core/apis/api.service';
import { Account } from 'src/app/models/accounts.model';
import { AccountsService } from '../services/accounts.service';
import * as fromActions from './accounts.actions';
import * as fromAccountMessages from '../../../constants/accounts.data';
import { TypeAccount } from 'src/app/models/typeaccount.model';

@Injectable()
export class AccountsEffects {

  loadAccountss$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadAccountss),
    concatMap((props) => this.apiService.get<Account[]>(RoutesApis.getAllAccountsById, props.applicationUserId)
      .pipe(
        map(response => (fromActions.loadAccountssSuccess({ accounts: response.body }))),
        catchError((error) => of(fromActions.loadAccountssFailure({ error }))
        )))
  ));

  loadTypeAccounts$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadTypeAccounts),
    concatMap(() => this.apiService.getAll<TypeAccount[]>(RoutesApis.typeAccounts)
      .pipe(
        map(response => (fromActions.loadTypeAccountsSucces({ typeAccounts: response.body }))),
        catchError((error) => of(fromActions.loadTypeAccountsFailure({ error }))
        )))
  ));

  takeHave$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.takeHave),
    concatMap((props) => this.apiService.postGeneric(props.takeHave, RoutesApis.takeBalance)
      .pipe(
        map(response => (fromActions.takeHaveSuccess({ account: response.body }))),
        catchError((error) => of(fromActions.takeHaveFailure({ error }))
        )))
  ));

  takeHaveSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.takeHaveSuccess),
    tap((props) => {
      if (props.account !== null) {
        this.service.presentToast(fromAccountMessages.takeBalanceMessage);
        this.service.setCheckedNumberAccount(false);
        this.router.navigate(['/menu/accounts']);
      } else {
        this.service.presentToast(fromAccountMessages.takeBalanceWithOutMoneyMessage);
      }
    })), { dispatch: false });

  create$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.create),
    concatMap((props) => this.apiService.post<Account>(props.account, RoutesApis.accounts)
      .pipe(
        map(response => (fromActions.createSuccess({ account: response.body }))),
        catchError((error) => of(fromActions.createFailure({ error }))
        )))
  ));

  createSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.createSuccess),
    tap((props) => {
      if (props.account !== null) {
        this.service.presentToast(fromAccountMessages.createAccountMessage);
        this.router.navigate(['/menu/accounts']);
      } else {
        this.service.presentToast(fromAccountMessages.createAccountExistsMessage);
      }
    })), { dispatch: false });

  searchNumberAccount$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.searchNumberAccount),
    concatMap((props) => this.apiService.get<Account>(RoutesApis.findAccountByNumberAccount, props.numberAccount)
      .pipe(
        map(response => (fromActions.searchNumberAccountSucces({ account: response.body }))),
        catchError((error) => of(fromActions.searchNumberAccountFailure({ error }))
        )))
  ));

  searchNumberAccountSucces$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.searchNumberAccountSucces),
    tap((props) => {
      if (props.account !== null) {
        this.service.presentToast(fromAccountMessages.searchNumberAccountMessage);
        this.service.setCheckedNumberAccount(true);
      } else {
        this.service.presentToast(fromAccountMessages.searchNumberAccountNotExistsMessage);
        this.service.setCheckedNumberAccount(false);
      }
    })), { dispatch: false });


  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private service: AccountsService,
    private router: Router
  ) { }


}
