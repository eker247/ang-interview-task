import * as fromItems from './item.actions';

describe('loadItems', () => {
  it('should return an action', () => {
    expect(fromItems.loadItems({ id: 1 }).type).toBe('[Items] Load Items');
  });
});
