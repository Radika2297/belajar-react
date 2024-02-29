/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";
import ProfilePage from "./pages/profile.jsx";
import DetailProductsPage from "./pages/detailProduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Layout/Navbar.jsx";
import DarkModeContextProvider from "./components/context/DarkMode.jsx";
import { TotalPriceProvider } from "./components/context/TotalPriceContext.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <h1>Hello World</h1>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/products",
		element: <ProductsPage />,
	},
	{
		path: "/profile",
		element: <ProfilePage />,
	},
	{
		path: "/product/:id",
		element: <DetailProductsPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<DarkModeContextProvider>
				<TotalPriceProvider>
					<RouterProvider router={router} />
				</TotalPriceProvider>
			</DarkModeContextProvider>
		</Provider>
	</React.StrictMode>
);