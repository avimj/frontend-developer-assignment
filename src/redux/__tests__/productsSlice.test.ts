import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { fetchProducts } from '../productsSlice';

vi.mock('axios');

const mockedAxios = axios as unknown as { get: vi.Mock };

describe('productsSlice', () => {
  beforeEach(() => {
    mockedAxios.get = vi.fn();
  });

  it('fetches products via thunk', async () => {
    const sample = [{ id: 1, title: 'A' }];
    mockedAxios.get.mockResolvedValue({ data: sample });

    const store = configureStore({ reducer: { products: productsReducer } });

    await store.dispatch(fetchProducts() as any);

    const state = store.getState().products;
    expect(state.products).toEqual(sample);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('handles errors in thunk', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network'));

    const store = configureStore({ reducer: { products: productsReducer } });

    await store.dispatch(fetchProducts() as any);

    const state = store.getState().products;
    expect(state.products).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBeDefined();
  });
});