import { useRef } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/input/Index";
import { useEffect } from "react";
import { login } from "../../services/auth.services";
import { useState } from "react";

const FormLogin = () => {
	const [loginFailed, setLoginFailed] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		// localStorage.setItem("email", e.target.email.value);
		// localStorage.setItem("password", e.target.password.value);
		// window.location.href = "/products";
		const data = {
			username: e.target.username.value,
			password: e.target.password.value,
		};

		login(data, (status, res) => {
			if (status) {
				localStorage.setItem("token", res);
				window.location.href = "/products";
			} else {
				setLoginFailed(res.response.data);
			}
		});
	};

	const usernameRef = useRef(null);

	useEffect(() => {
		usernameRef.current.focus();
	}, []);

	return (
		<form onSubmit={handleLogin}>
			<InputForm
				label="Username"
				type="text"
				placeholder="Jhon Doe"
				name="username"
				ref={usernameRef}
			/>
			<InputForm
				label="Password"
				type="password"
				placeholder="Enter Your Password"
				name="password"
			/>
			<Button classname="bg-blue-500 w-full" type="submit">
				Login
			</Button>
			<p className="text-red-500 text-center mt-5">{loginFailed}</p>
		</form>
	);
};

export default FormLogin;
