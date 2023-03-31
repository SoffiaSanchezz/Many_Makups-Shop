import React from 'react';

const CategoryButtons = ({ categories, selectCategory }) => {
    return (
        <div>
            <button onClick={() => selectCategory(null)}>Todos</button>
            {categories.map((category, index) => (
                <button key={index} onClick={() => selectCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryButtons;
