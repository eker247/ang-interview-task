import { createAction, props } from '@ngrx/store';
import { ItemMap } from 'src/app/item/models/item-map.model';
import { Item } from 'src/app/item/models/item.model';

const actionsPrefix = '[Items]';
export const loadItems = createAction(`${actionsPrefix} Load Items`, props<{ id: number }>());
export const loadItemSuccess = createAction(`${actionsPrefix} Load Items Success`, props<{ items: ItemMap }>());
export const removeItem = createAction(`${actionsPrefix} Remove Item`, props<{ id: number }>());
export const removeItemSuccess = createAction(`${actionsPrefix} Remove Item Success`, props<{ id: number }>());
export const saveItem = createAction(`${actionsPrefix} Save Item`, props<{ item: Item, userId: number }>());
export const saveItemSuccess = createAction(`${actionsPrefix} Save Item Success`, props<{ item: Item, id: number }>());




