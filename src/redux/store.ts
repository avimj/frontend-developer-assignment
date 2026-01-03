import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
  },
});

// Persist favorites to localStorage
store.subscribe(() => {
  try {
    const favs = store.getState().favorites.favorites;
    localStorage.setItem('favorites', JSON.stringify(favs));
  } catch (e) {
    // ignore write errors in non-browser env (tests)
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;