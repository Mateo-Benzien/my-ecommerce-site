// src/components/ProductCard.js

export default function ProductCard({ product }) {
    return (
      <div className="product-card">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {/* Add more product details */}
      </div>
    );
  }
  