import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();

  const products = [
    { id: 1, name: 'Smartphone', price: 699.99 },
    { id: 2, name: 'Laptop', price: 1299.99 },
    { id: 3, name: 'Headphones', price: 199.99 },
  ];

  return (
    <div className="homepage">
      {/* כותרת ראשית */}
      <header className="homepage-header">
        <h1>{t('welcome')}</h1>
        <p>{t('welcome_subtitle')}</p>
      </header>

      {/* קטגוריות */}
      <section className="homepage-categories">
        <h2>{t('categories.title')}</h2>
        <div className="categories">
          <div className="category">{t('categories.electronics')}</div>
          <div className="category">{t('categories.clothing')}</div>
          <div className="category">{t('categories.home_garden')}</div>
          <div className="category">{t('categories.beauty_health')}</div>
        </div>
      </section>

      {/* מוצרים */}
      <section className="homepage-products">
        <h2>{t('featured_products')}</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <p>
                {t('price')}: ₪{product.price.toFixed(2)}
              </p>
              <Link to={`/product/${product.id}`} className="view-details-button">
                {t('view_details')}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
