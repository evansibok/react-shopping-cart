import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext';
import CartContent from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContent.Provider value={cart}>
					<Navigation cart={cart} />
				</CartContent.Provider>
			</ProductContext.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{ products, addItem }}>
				<Route
					exact
					path="/"
					component={Products}
				/>
			</ProductContext.Provider>

			<ProductContext.Provider value={{ products, addItem }}>
				<CartContent.Provider value={cart}>
					<Route
						path="/cart"
						component={ShoppingCart} />
				</CartContent.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
