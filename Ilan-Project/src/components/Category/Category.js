import React from 'react';
import './Category.css';

const Category = ({ name }) => {
  return (
    <div className="category">
    {name}
    </div>
  );
};

export default Category;
