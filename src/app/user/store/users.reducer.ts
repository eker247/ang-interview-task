import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UsersActions from './users.actions';

export const usersFeatureKey = 'users';

export interface State {
  users: { [key: number]: User };
  currentUserId?: number;
}

export const initialState: State = {
  users: {
    1: {
      id: 1,
      name: 'User1',
    },
    2: {
      id: 2,
      name: 'User2',
    },
    3: {
      id: 3,
      name: 'User3',
    },
  },
  currentUserId: 1,
};

export const reducer = createReducer(
  initialState,

  on(UsersActions.loadUserSuccess, (state, { users }) => {
    const newState = { ...state, users };
    return newState;
  }),

  on(UsersActions.switchUser, (state, { id }) => ({
    ...state,
    currentUserId: id,
  })),
);
