import { createReducer, on } from '@ngrx/store';
import { ItemMap } from 'src/app/item/models/item-map.model';
import * as ItemsActions from './item.actions';

export const itemsFeatureKey = 'items';

export interface State {
  items: ItemMap;
  currentItemId?: number;
}

export const initialState: State = {
  items: {
    1: {
      id: 1,
      title: 'Item1',
      content: 'Content 1'
    },
    2: {
      id: 2,
      title: 'Item2',
      content: 'Content 2'
    },
    3: {
      id: 3,
      title: 'Item3',
      content: 'Content 3'
    },
  },
  currentItemId: 1,
};

export const reducer = createReducer(
  initialState,

  on(ItemsActions.loadItemSuccess, (state, { items }) => {
    const newState = { ...state, items };
    return newState;
  }),

  on(ItemsActions.removeItemSuccess, (state, { id }) => {
    const newState = { ...state };
    delete newState[id];
    return newState;
  }),
);
