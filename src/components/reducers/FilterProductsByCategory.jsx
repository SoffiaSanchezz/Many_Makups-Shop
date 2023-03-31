// FilterProductsByCategory.jsx
import { useContext } from 'react';
import { ShoppingContext } from './ShoppingReducer';

const FilterProductsByCategory = ({ categoryId, children }) => {
    const shoppingState = useContext(ShoppingContext);
    const { productos } = shoppingState;

    const filteredProducts = productos.filter(
        (producto) => producto.categoria1Id === categoryId || producto.categoria2Id === categoryId
    );

    return <>{children(filteredProducts)}</>;
};

export default FilterProductsByCategory;