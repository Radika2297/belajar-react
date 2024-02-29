/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import { useEffect } from "react";
import { getProducts } from "../services/product..services";
import TableCard from "../components/fragments/TableCard";
import Navbar from "../components/Layout/Navbar";
import { useContext } from "react";
import { DarkMode } from "../components/context/DarkMode";

const ProductsPage = () => {
	// const [cart, setCart] = useState([]);
	// const [totalPrice, setTotalPrice] = useState(0);
	const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
	const [products, setProducts] = useState([]);

	// useEffect(() => {
	// 	setCart(JSON.parse(localStorage.getItem("cart")) || []);
	// }, []);

	// const handleAddToCart = (id) => {
	// 	if (cart.find((cardItem) => cardItem.id === id)) {
	// 		setCart(
	// 			cart.map((cardItem) =>
	// 				cardItem.id === id ? { ...cardItem, qty: cardItem.qty + 1 } : cardItem
	// 			)
	// 		);
	// 	} else {
	// 		setCart([...cart, { id, qty: 1 }]);
	// 	}
	// };

	useEffect(() => {
		getProducts((data) => {
			setProducts(data);
		});
	}, []);

	return (
		<>
			<Navbar />
			<div
				className={`flex justify-center py-5 px-5 ${
					isDarkMode && "bg-slate-900 text-white"
				}`}
			>
				<div className="flex w-3/4 flex-wrap">
					{products.length > 0 &&
						products.map((product) => (
							<CardProduct key={product.id}>
								<CardProduct.Header image={product.image} id={product.id} />
								<CardProduct.Body name={product.title}>
									{product.description}
								</CardProduct.Body>
								<CardProduct.Footer
									price={product.price}
									id={product.id}
								></CardProduct.Footer>
							</CardProduct>
						))}
				</div>
				<div className="w-1/4">
					<h1 className="font-bold text-blue-600 text-3xl mb-3">Cart</h1>
					<TableCard products={products} />
				</div>
			</div>
		</>
	);
};

export default ProductsPage;
