import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  // קבלת פרטי המוצר מכתובת ה-URL
  const { id } = useParams();

  // נתונים לדוגמה; ניתן לטעון נתונים משרת בעתיד.
  const product = {
    id,
    name: `Product ${id}`,
    price: 100 * id,
    description: `This is a detailed description of Product ${id}.`,
    image: 'https://via.placeholder.com/300', // תמונה לדוגמה
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
