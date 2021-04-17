import { createAction, props } from '@ngrx/store';
import { UserMap } from 'src/app/user/models/user-map';

const actionsPrefix = '[Users]';
export const loadUsers = createAction(`${actionsPrefix} Load Users`);
export const loadUserSuccess = createAction(`${actionsPrefix} Load Users Success`, props<{ users: UserMap }>());
export const switchUser = createAction(`${actionsPrefix} Switch User`, props<{ id: number }>());
export const saveUsers = createAction(`${actionsPrefix} Save Users`, props<{ users: UserMap }>());
export const saveUsersSuccess = createAction(`${actionsPrefix} Save Users Success`, props<{ users: UserMap }>());




