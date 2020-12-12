import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { RoutesApis } from 'src/app/core/apis/api.routes';
import { ApiService } from 'src/app/core/apis/api.service';
import { TypeIdentification } from 'src/app/models/typeidentification.model';
import { ApplicationUser } from 'src/app/models/userapp.model';
import { UsersAppService } from '../services/users-app.service';
import * as fromActions from './users-app.actions';
import * as fromUserMessages from '../../../constants/userapp.data';
import { Router } from '@angular/router';


@Injectable()
export class UsersAppEffects {

  loadUsersApps$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadUsersApps),
    concatMap(() => this.apiService.getAll<ApplicationUser[]>(RoutesApis.users)
      .pipe(
        map(response => (fromActions.loadUsersAppsSuccess({ applicationUsers: response.body }))),
        catchError((error) => of(fromActions.loadUsersAppsFailure({ error }))
        )))
  ));

  loadTypeIdentification$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadTypeIdentification),
    concatMap(() => this.apiService.getAll<TypeIdentification[]>(RoutesApis.typeIdentification)
      .pipe(
        map(response => (fromActions.loadTypeIdentificationSuccess({ typeIdentifications: response.body }))),
        catchError((error) => of(fromActions.loadTypeIdentificationFailure({ error }))
        )))
  ));

  create$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.create),
    concatMap((props) => this.apiService.post<ApplicationUser>(props.applicationUser, RoutesApis.users)
      .pipe(map(response => (fromActions.createSuccess({ applicationUser: response.body }))),
        catchError((error) => of(fromActions.createFailure({ error }))
        )))
  ));

  createSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.createSuccess),
    tap((props) => {
      if(props.applicationUser !== null){
        this.service.presentToast(fromUserMessages.userCreateMessage);
        this.router.navigate(['/login']);
      }else{
        this.service.presentToast(fromUserMessages.userCreateExistsMessage);
      }
    })), { dispatch: false });

    createFailure$ = createEffect(() => this.actions$.pipe(
      ofType(fromActions.createFailure),
      tap((props) => {
        if(props.error !== null){
          this.service.presentToast(fromUserMessages.userCreateMessageFailure);
          this.router.navigate(['/login']);
        }
      })), { dispatch: false });

  edit$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.edit),
    concatMap((props) => this.apiService.put<ApplicationUser>(props.applicationUser, RoutesApis.users)
      .pipe(map(response => (fromActions.editSuccess({ applicationUser: response.body }))),
        catchError((error) => of(fromActions.editFailure({ error }))
        )))
  ));

  editSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.editSuccess),
    tap((props) => {

      this.service.loadApplicationUsers();
    })), { dispatch: false });

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.deleteUser),
    concatMap((props) => this.apiService.delete<ApplicationUser>(RoutesApis.users, props.applicationUser.id)
      .pipe(map(response => (fromActions.deleteUserSuccess({ applicationUser: response.body }))),
        catchError((error) => of(fromActions.deleteUserFailure({ error }))
        )))
  ));

  deleteUserSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.deleteUserSuccess),
    tap((props) => {

      this.service.loadApplicationUsers();
    })), { dispatch: false });


  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private service: UsersAppService,
    private router:Router
  ) { }

}
