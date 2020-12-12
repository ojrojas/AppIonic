import { createAction, props } from '@ngrx/store';
import { ApplicationUser } from 'src/app/models/userapp.model';

export const login = createAction(
  '[Login] Login',
  props<{applicationUser: ApplicationUser}>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ token: string }>()
);

export const OnError = createAction(
  '[Login] On Error',
  props<{ error: any }>()
);

