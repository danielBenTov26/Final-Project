import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  // Get product details from the URL
  const { id } = useParams();

  // Example data; can load data from a server in the future.
  const product = {
    id,
    name: `Product ${id}`,
    price: 100 * id,
    description: `This is a detailed description of Product ${id}.`,
    image: 'https://via.placeholder.com/300', // Placeholder image
  };

  return (
    <div className="product-page">
      <div className="product-page-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-page-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
