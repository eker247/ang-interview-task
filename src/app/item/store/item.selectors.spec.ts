import * as fromItems from './item.reducer';
import { selectItemState } from './item.selectors';

describe('Items Selectors', () => {
  it('should select the feature state', () => {
    const result = selectItemState({
      [fromItems.itemsFeatureKey]: {}
    });

    expect(result).toEqual(null);
  });
});
