import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import productsReducer from '../../redux/productsSlice';
import favoritesReducer from '../../redux/favoritesSlice';
import ProductListing from '../ProductListing';
import { vi } from 'vitest';
import * as productsSlice from '../../redux/productsSlice';

const sampleProducts = [
  { id: 1, title: 'Apple', description: '', category: 'fruit', image: '', price: 1 },
  { id: 2, title: 'Banana', description: '', category: 'fruit', image: '', price: 2 },
  { id: 3, title: 'Carrot', description: '', category: 'veg', image: '', price: 3 },
];

function renderWithStore(preloadedState = { products: { products: sampleProducts, loading: false, error: null }, favorites: { favorites: [] } }) {
  const store = configureStore({ reducer: { products: productsReducer, favorites: favoritesReducer }, preloadedState });
  return render(
    <Provider store={store as any}>
      <MemoryRouter>
        <ProductListing />
      </MemoryRouter>
    </Provider>
  );
} 

describe('ProductListing', () => {
  beforeEach(() => {
    // Return a thunk function so dispatch(fetchProducts()) is valid in tests
    vi.spyOn(productsSlice, 'fetchProducts').mockImplementation((): any => () => Promise.resolve([]));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('filters by search term', async () => {
    renderWithStore();
    const input = screen.getByRole('textbox', { name: /search products by title/i });
    await userEvent.type(input, 'app');

    // wait for debounce
    await new Promise((r) => setTimeout(r, 350));

    expect(screen.getByText(/Apple/)).toBeInTheDocument();
    expect(screen.queryByText(/Banana/)).not.toBeInTheDocument();
  });
});