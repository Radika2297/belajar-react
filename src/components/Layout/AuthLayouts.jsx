/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../context/DarkMode";

/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
	const { children, title, type } = props;
	const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

	console.log(isDarkMode);

	return (
		<div
			className={`flex justify-center min-h-screen items-center ${
				isDarkMode && "bg-slate-900"
			}`}
		>
			<div className="w-full max-w-xs border rounded-md p-6 shadow ">
				<button
					className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded "
					onClick={() => setIsDarkMode(!isDarkMode)}
				>
					{isDarkMode ? "Light" : "Dark"}
				</button>
				<h1 className="text-blue text-3xl font-bold text-blue-500 mb-2">
					{title}
				</h1>
				<p className="font-medium text-slate-500 mb-3">
					Welcome, Please enter your details
				</p>
				{children}
				<p className="text-sm mt-3">
					{type === "login"
						? "Dont have an account ? "
						: "Already have an account ? "}
					{type === "login" && (
						<Link to="/Register" className="font-bold text-green-500">
							Sign up
						</Link>
					)}
					{type === "register" && (
						<Link to="/Login" className="font-bold text-blue-500">
							Sign in
						</Link>
					)}
				</p>
			</div>
		</div>
	);
};

export default AuthLayout;
