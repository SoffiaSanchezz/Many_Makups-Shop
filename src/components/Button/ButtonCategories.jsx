import React, { useState } from 'react';
import Product from './Product';

const ButtonCategories = ({ products }) => {
  const uniqueCategories = [...new Set(products.map(product => product.category))];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const CategoryButtons = ({ onCategorySelected }) => {
    return (
      <div>
        <button onClick={() => onCategorySelected(null)}>Todos</button>
        {uniqueCategories.map((category, index) => (
          <button key={index} onClick={() => onCategorySelected(category)}>{category}</button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <CategoryButtons onCategorySelected={setSelectedCategory} />
      {filteredProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ButtonCategories;
