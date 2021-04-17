import { Item } from 'src/app/item/models/item.model';

export interface ItemMap {
  [itemId: number]: Item;
}
