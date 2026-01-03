import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/productsSlice';
import * as productsSlice from '../redux/productsSlice';
import { vi } from 'vitest';
import favoritesReducer from '../redux/favoritesSlice';
import Landing from '../pages/Landing';
import Favorites from '../pages/Favorites';
import ProductListing from '../pages/ProductListing';
import HomeLayout from '../pages/HomeLayout';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const sampleProducts = [
  { id: 1, title: 'Apple', description: '', category: 'fruit', image: '', price: 1 },
];

function renderWithStore(preloadedState = { products: { products: sampleProducts, loading: false, error: null }, favorites: { favorites: [] } }) {
  const store = configureStore({ reducer: { products: productsReducer, favorites: favoritesReducer }, preloadedState });
  return render(
    <Provider store={store as any}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Landing />} />
            <Route path="shop" element={<ProductListing />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </Provider>
  );
}

describe('Favorites flow', () => {
  beforeEach(() => {
    // return a thunk (function) so dispatch(fetchProducts()) works in components
    vi.spyOn(productsSlice, 'fetchProducts').mockImplementation((): any => () => Promise.resolve([]));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('can favorite a product and see it on favorites page', async () => {
    renderWithStore();

    // click favorite button (wait for it to appear)
    const favButton = await screen.findByRole('button', { name: /add to favorites|remove from favorites/i });
    await userEvent.click(favButton);

    // navigate to favorites
    const favLink = screen.getByText(/favorites/i);
    await userEvent.click(favLink);

    expect(screen.getByText(/Apple/)).toBeInTheDocument();
  });
});