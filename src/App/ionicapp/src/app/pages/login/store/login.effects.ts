import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { failureLoginMessage } from 'src/app/constants/login.data';
import { RoutesApis } from 'src/app/core/apis/api.routes';
import { ApiService } from 'src/app/core/apis/api.service';
import { AuthService } from '../../auth/services/auth.service';
import { LoginService } from '../services/login.service';
import * as fromActions from './login.actions';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.login),
      concatMap((props) => this.api.postLogin(props.applicationUser, RoutesApis.login).pipe(
        map(response => fromActions.loginSuccess({ token: response.body })),
        catchError(error => of(fromActions.OnError({ error }))))
      )
    );
  });

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.loginSuccess),
      tap((props) => {
        if (props.token !== null) {
          const claims = this.service.getClaims(props.token);
          this.authService.setClaimsAuth(claims, props.token);
          debugger;
          this.router.navigate(['/menu/home']);
        } else {
        this.service.presentToast(failureLoginMessage);
        }
        return;
      })
    );
  }, { dispatch: false });



  constructor(
    private router: Router,
    private actions$: Actions,
    private service: LoginService,
    private api: ApiService,
    private authService: AuthService) { }
}
