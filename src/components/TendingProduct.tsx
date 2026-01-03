import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../redux/productsSlice';
import type { Product } from '../types/Product';
import { Link } from 'react-router-dom';
const TendingProduct = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className="tending-product site-container pt-6 pb-12 px-5">
            <h2 className="mb-4 text-3xl text-left">Tending Product</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.slice(0, 6).map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Link to="/shop" className="button text-sm mt-4 border-2 border-solid px-2 py-1 rounded inline-block">
                View More
            </Link>
        </div>
    );
};

export default TendingProduct;