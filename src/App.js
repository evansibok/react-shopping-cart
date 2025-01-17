import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContext from '../src/contexts/ProductContext'
import CartContext from '../src/contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = id => {
		setCart(cart.filter(c => c.id !== id));
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, removeItem }}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						render={() => <ShoppingCart />}
					/>
				</div>
			</CartContext.Provider>

		</ProductContext.Provider>
	);
}

export default App;
