import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  if (favorites.length === 0) return <div className="p-4">No favorites yet.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      <Link to="/shop">← Back to products</Link>
      <div className='promo-box site-container pt-6 pb-12 px-'>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;