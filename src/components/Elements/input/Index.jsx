/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
	const { label, name, type, placeholder } = props;
	return (
		<div className="mb-4">
			<Label htmlfor={name}>{label}</Label>
			<Input name={name} type={type} placeholder={placeholder} ref={ref} />
		</div>
	);
});

export default InputForm;
