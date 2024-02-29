import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button/Button";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DarkMode } from "../context/DarkMode";
import { useTotalPrice } from "../context/TotalPriceContext";

const Navbar = () => {
	const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

	const username = useLogin();
	const [totalCart, setTotalCart] = useState(0);
	const cart = useSelector((state) => state.cart.data);
	const { total } = useTotalPrice();

	useEffect(() => {
		if (cart.length > 0) {
			const sum = cart.reduce((acc, item) => {
				return acc + item.qty;
			}, 0);
			setTotalCart(sum);
		} else {
			setTotalCart(0);
		}
	}, [cart]);

	const handleLogOut = () => {
		localStorage.removeItem("token");
		window.location.href = "/login";
	};

	return (
		<div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
			{username}
			<Button classname="ml-5 bg-black rounded shadow" onClick={handleLogOut}>
				Log Out
			</Button>
			<div className="flex items-center bg-black p-2 rounded-md mx-5 ">
				Item : {totalCart} | Price : $ {total}
			</div>
			<Button
				className=" bg-black p-3 text-white rounded "
				onClick={() => setIsDarkMode(!isDarkMode)}
			>
				{isDarkMode ? "Light" : "Dark"}
			</Button>
		</div>
	);
};

export default Navbar;
