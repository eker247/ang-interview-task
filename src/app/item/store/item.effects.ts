import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { switchUser } from 'src/app/user/store/users.actions';
import { ItemApiService } from '../services/item-api.service';
import { loadItems, loadItemSuccess, removeItem, removeItemSuccess, saveItem, saveItemSuccess } from './item.actions';

@Injectable()
export class ItemsEffects {

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(switchUser, loadItems, saveItemSuccess),
    switchMap((user) => this.itemApiService.getItems(user.id)),
    map((items) => loadItemSuccess({ items })),
  ));

  removeItem$ = createEffect(() => this.actions$.pipe(
    ofType(removeItem),
    switchMap(({ id }) => this.itemApiService.removeItem(id)),
    map((id) => removeItemSuccess({ id })),
  ));

  saveItem$ = createEffect(() => this.actions$.pipe(
    ofType(saveItem),
    switchMap(({ item, userId }) => this.itemApiService.saveItem(item, userId)),
    map(({ item, userId }) => saveItemSuccess({ item, id: userId })),
  ));

  constructor(
    private actions$: Actions,
    private itemApiService: ItemApiService
  ) {
  }

}
