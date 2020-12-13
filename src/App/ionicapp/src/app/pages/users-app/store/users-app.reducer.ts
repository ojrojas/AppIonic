import { Action, createReducer, on } from '@ngrx/store';
import { TypeIdentification } from 'src/app/models/typeidentification.model';
import { ApplicationUser } from 'src/app/models/userapp.model';
import * as UsersAppActions from './users-app.actions';

export const usersAppFeatureKey = 'usersApp';

export interface State {
  isLoading: boolean;
  applicationUsers: ApplicationUser[];
  applicationUser: ApplicationUser;
  typeIdentifications:TypeIdentification[];
  error: any;
}

export const initialState: State = {
  isLoading: false,
  applicationUser: null,
  applicationUsers: [],
  error: null,
  typeIdentifications:[]
};

export const reducer = createReducer(
  initialState,

  on(UsersAppActions.loadUsersApps, (state) => ({
    ...state,
    isLoading: true
  })),
  on(UsersAppActions.loadUsersAppsSuccess, (state, { applicationUsers }) => ({
    ...state,
    applicationUsers,
    isLoading: false
  })),
  on(UsersAppActions.loadUsersAppsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(UsersAppActions.loadTypeIdentification, (state) => ({
    ...state,
    isLoading: true
  })),
  on(UsersAppActions.loadTypeIdentificationSuccess, (state, { typeIdentifications }) => ({
    ...state,
    typeIdentifications,
    isLoading: false
  })),
  on(UsersAppActions.loadTypeIdentificationFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(UsersAppActions.create, (state) => ({
    ...state,
    isLoading: true
  })),
  on(UsersAppActions.createSuccess, (state) => ({
    ...state,
    isLoading: false
  })),
  on(UsersAppActions.createFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(UsersAppActions.edit, (state) => ({
    ...state,
    isLoading: true
  })),
  on(UsersAppActions.editSuccess, (state) => ({
    ...state,
    isLoading: false
  })),
  on(UsersAppActions.editFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(UsersAppActions.deleteUser, (state) => ({
    ...state,
    isLoading: true
  })),
  on(UsersAppActions.deleteUserSuccess, (state) => ({
    ...state,
    isLoading: false
  })),
  on(UsersAppActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
);

