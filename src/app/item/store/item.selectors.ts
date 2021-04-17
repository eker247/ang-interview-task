import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromItems from './item.reducer';

export const selectItemState = createFeatureSelector<fromItems.State>(
  fromItems.itemsFeatureKey
);

export const selectItems = createSelector(
  selectItemState,
  state => Object.values(state.items),
);

export const selectCurrentItem = createSelector(
  selectItemState,
  state => state.items[state.currentItemId]
);
