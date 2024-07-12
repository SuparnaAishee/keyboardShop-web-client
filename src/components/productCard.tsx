
// src/features/products/ProductCard.tsx
import { Product } from '@/redux/api/api';
import React from 'react';

import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.category}</p>
      <p>${item.price}</p>
      <div className="ratings">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < item.ratings ? 'filled' : ''}>★</span>
        ))}
      </div>
      <Link to={`/products/${item._id}`}>Show Details</Link>
    </div>
  );
};

export default ProductCard;

