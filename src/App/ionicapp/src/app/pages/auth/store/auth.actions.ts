import { createAction, props } from '@ngrx/store';
import { ApplicationUser } from 'src/app/models/userapp.model';

export const loadAuths = createAction(
  '[Auth] Load Auths'
);

export const loadAuthsSuccess = createAction(
  '[Auth] Load Auths Success',
  props<{ data: any }>()
);

export const loadAuthsFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);

export const setClaimsAuth = createAction(
  '[Auth] set Claims Auth',
  props<{userApp: ApplicationUser, token: string}>()
);

export const setClaimsAuthFailure = createAction(
  '[Auth] set Claims Auth Failure',
  props<{error: any}>()
);



