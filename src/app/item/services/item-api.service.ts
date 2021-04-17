import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemMap } from 'src/app/item/models/item-map.model';
import { Item } from 'src/app/item/models/item.model';
import { StoredItemMap } from 'src/app/item/models/stored-item-map.model';
import { APP_KEY } from 'src/app/shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ItemApiService {
  constructor(private httpService: HttpClient) { }

  private getStoredItemMap(): StoredItemMap {
    return JSON.parse(localStorage.getItem(`${APP_KEY} items`) || null) as StoredItemMap;
  }

  private setStoredItemMap(storedItemMap: StoredItemMap): void {
    localStorage.setItem(`${APP_KEY} items`, JSON.stringify(storedItemMap));
  }

  setItemsInLocalStorage() {
    const storedItems = this.getStoredItemMap();
    if (!storedItems) {
      this.httpService.get('assets/item.json').subscribe((storedItemMap: StoredItemMap) =>
        this.setStoredItemMap(storedItemMap)
      );
    }
  }

  getItems(userId: number): Observable<ItemMap> {
    const storedItems = this.getStoredItemMap();

    const response = Object.keys(storedItems).length ? of(storedItems[userId]) : this.httpService.get('assets/item.json').pipe(
      map((resp: any) => (resp as StoredItemMap)[userId]));

    return response;
  }

  removeItem(id: number): Observable<number> {
    const storedItemMap = this.getStoredItemMap();
    Object.keys(storedItemMap).forEach((storedItemMapKey: string) => {
      if (storedItemMap[storedItemMapKey][id]) {
        delete storedItemMap[storedItemMapKey][id]
      }
    });
    this.setStoredItemMap(storedItemMap);
    return of(id);
  }

  saveItem(item: Item, userId: number): Observable<{ item: Item, userId: number }> {
    const storedItemMap = this.getStoredItemMap();
    const id = item.id || Date.now();
    if (storedItemMap[userId]) {
      storedItemMap[userId][item.id] = { id, ...item };
    } else {
      storedItemMap[userId] = { [item.id]: { id, ...item } };
    }
    this.setStoredItemMap(storedItemMap);
    return of({ item, userId });
  }
}
