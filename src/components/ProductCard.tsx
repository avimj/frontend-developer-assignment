import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import type { RootState, AppDispatch } from '../redux/store';
import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFav = favorites.some((f) => f.id === product.id);

  const toggleFavorite = () => {
    if (isFav) dispatch(removeFavorite(product.id));
    else dispatch(addFavorite(product));
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg relative">
      <button
        onClick={toggleFavorite}
        aria-pressed={isFav}
        aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
        className={`absolute top-2 right-2 text-xl ${isFav ? 'text-red-500' : 'text-gray-400'}`}
      >
        {isFav ? '♥' : '♡'}
      </button>

      <Link to={`/product/${product.id}`} className="block">
        <img src={product.image} alt={product.title} className="w-full h-64 object-contain" />
        <h2 className="font-bold mt-2">{product.title}</h2>
      </Link>

      <p className="text-lg text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;