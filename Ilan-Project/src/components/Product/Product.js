import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ name, price, id }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <Link to={`/product/${id}`} className="view-details-button">
        View Details
      </Link>
    </div>
  );
};

export default Product;
