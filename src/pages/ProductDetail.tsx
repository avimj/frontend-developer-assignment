import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addFavorite } from '../redux/favoritesSlice';
import type { RootState, AppDispatch } from '../redux/store';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const productId = Number(id);
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === productId)
  );

  if (!product) return <div>Product not found</div>;

  const handleAddFavorite = () => {
    dispatch(addFavorite(product));
  };

  return (
    <div className="site-container pt-6 pb-12 gap-6 px-5">
      <Link to="/shop">← Back to products</Link>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.title} className="w-full h-96 object-contain" />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <p className="mt-4 text-xl font-semibold">${product.price}</p>
          <button
            onClick={handleAddFavorite}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;