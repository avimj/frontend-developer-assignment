import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import type { RootState, AppDispatch } from '../redux/store';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/Product';

const ProductListing: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // debounce search input
  useEffect(() => {
    const t = setTimeout(() => setDebouncedTerm(searchTerm), 300);
    return () => clearTimeout(t);
  }, [searchTerm]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [products]);

  const filtered = useMemo(() => {
    let list = products.slice();

    if (debouncedTerm.trim()) {
      const q = debouncedTerm.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);

    return list;
  }, [products, debouncedTerm, selectedCategories, sort]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='flex site-container pt-6 pb-12 gap-6 px-5 max-md:flex-col md:flex-row md:gap-6'>
      <div className="flex flex-col items-start gap-4 mb-6">
        <h4 className='mb-4'>Filter</h4>
        <div className="flex items-center gap-2">
          <label htmlFor="search" className="sr-only">Search products</label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title"
            className="border rounded px-3 py-2 w-64"
            aria-label="Search products by title"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
            <h4>Filter by Category</h4>
            <div role="group" aria-label="Categories" className="flex flex-col gap-2">
              {categories.map((c) => {
                const checked = selectedCategories.includes(c);
                return (
                  <label key={c} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        if (e.target.checked) setSelectedCategories((prev) => [...prev, c]);
                        else setSelectedCategories((prev) => prev.filter((x) => x !== c));
                      }}
                      id={`cat-${c}`}
                      className="form-checkbox"
                    />
                    <span className="capitalize">{c}</span>
                  </label>
                );
              })}

              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="text-sm mt-2 border-2 border-solid px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div>No products match your criteria.</div>
      ) : (
        <div className='flex flex-col'>
            <div className="flex md:items-center max-md:justify-start md:justify-end max-md:flex-col max-md:items-start gap-2 mb-4">
                <label htmlFor="sort" className="">SORT BY:</label>
                <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as any)}
                    className="border rounded px-3 py-2"
                    aria-label="Sort products"
                >
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;