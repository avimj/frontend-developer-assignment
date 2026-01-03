import favoritesReducer, { addFavorite, removeFavorite } from '../favoritesSlice';

const product = { id: 1, title: 'Test', description: '', category: 'a', image: '', price: 10 };

describe('favoritesSlice', () => {
  it('adds a favorite', () => {
    const state = favoritesReducer(undefined, addFavorite(product as any));
    expect(state.favorites).toHaveLength(1);
    expect(state.favorites[0].id).toBe(1);
  });

  it('removes a favorite', () => {
    const initial = { favorites: [product as any] };
    const state = favoritesReducer(initial as any, removeFavorite(1));
    expect(state.favorites).toHaveLength(0);
  });
});