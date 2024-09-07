// src/pages/product/[id].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../../api/api';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const loadProduct = async () => {
        try {
          setLoading(true);
          const fetchedProduct = await fetchProductById(id);
          setProduct(fetchedProduct);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      loadProduct();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Render other product details */}
    </div>
  );
}
