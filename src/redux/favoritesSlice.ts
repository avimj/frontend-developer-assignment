import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../types/Product';

interface FavoritesState {
  favorites: Product[];
}

const loadFavorites = (): Product[] => {
  try {
    const raw = localStorage.getItem('favorites');
    if (!raw) return [];
    return JSON.parse(raw) as Product[];
  } catch (e) {
    return [];
  }
};

const initialState: FavoritesState = {
  favorites: typeof window !== 'undefined' ? loadFavorites() : [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Product>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;