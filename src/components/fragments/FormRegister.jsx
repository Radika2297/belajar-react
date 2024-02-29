import Button from "../Elements/Button/Button";
import InputForm from "../Elements/input/Index";

const FormRegister = () => {
	return (
		<form action="">
			<InputForm
				label="Fullname"
				type="text"
				placeholder="Enter Your Fullname"
				name="Fullname"
			/>
			<InputForm
				label="Email"
				type="email"
				placeholder="Enter Your Email"
				name="email"
			/>
			<InputForm
				label="Password"
				type="password"
				placeholder="Enter Your Password"
				name="password"
			/>
			<InputForm
				label="Confirm Password"
				type="password"
				placeholder="Confirm Your Password"
				name="Confirm Password"
			/>
			<Button classname="bg-green-500 w-full">Register</Button>
		</form>
	);
};

export default FormRegister;
