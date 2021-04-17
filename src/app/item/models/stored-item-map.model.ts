import { ItemMap } from 'src/app/item/models/item-map.model';

export interface StoredItemMap {
  [userId: number]: ItemMap
}
