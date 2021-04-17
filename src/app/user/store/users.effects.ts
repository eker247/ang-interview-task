import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { UserApiService } from '../services/user-api.service';
import { loadUsers, loadUserSuccess, saveUsers, saveUsersSuccess } from './users.actions';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => this.userApiService.getUsers()),
    map((users) => loadUserSuccess({ users })),
  ));

  saveUsers$ = createEffect(() => this.actions$.pipe(
    ofType(saveUsers),
    switchMap((props) => this.userApiService.saveUsers(props.users)),
    map((users) => saveUsersSuccess({ users })),
  ));

  constructor(
    private actions$: Actions,
    private userApiService: UserApiService
  ) {
  }

}
