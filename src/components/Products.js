import React, { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {
	const prod = useContext(ProductContext);
	return (
		<div className="products-container">
			{prod.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={prod.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
