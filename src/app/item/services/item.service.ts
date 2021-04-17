import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ItemsEffects } from 'src/app/item/store/item.effects';
import { UserService } from 'src/app/user/services/user.service';
import { Item } from '../models/item.model';
import { loadItems, removeItem, saveItem } from '../store/item.actions';
import { selectItems } from '../store/item.selectors';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private store: Store,
    private userService: UserService,
    private itemEffects: ItemsEffects,
  ) {
    this.trackItemsRemoving();
  }

  getItems(): Observable<Item[]> {
    return this.store.select(selectItems);
  }

  saveItem(item: Item): any {
    this.userService.getCurrentUser().subscribe(user =>
      this.store.dispatch(saveItem({ item, userId: user.id }))
    );
  }

  removeItem(id: number): any {
    this.store.dispatch(removeItem({ id }));
  }

  trackItemsRemoving(): any {
    this.itemEffects.removeItem$.pipe(
      switchMap(() => this.userService.getCurrentUser())
    ).subscribe(({ id }) => {
      this.store.dispatch(loadItems({ id }));
    });
  }
}
