/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
	const { children } = props;
	return (
		<div className="w-full max-w-sm border shadow rounded-lg bg-slate-700 border-blue-700 flex flex-col justify-between mx-2 my-2">
			{children}
		</div>
	);
};

const Header = (props) => {
	const { image, id } = props;
	return (
		<Link to={`/product/${id}`}>
			<img src={image} alt="product" className="p-8 rounded-t-lg h-72 w-full" />
		</Link>
	);
};

const Body = (props) => {
	const { children, name } = props;
	return (
		<div className="px-5 pb-5 h-full">
			<a href="">
				<h5 className="text-xl font-semibold tracking-tight text-white mb-3">
					{name.substring(0, 15)}...
				</h5>
				<p className="text-white text-m">{children.substring(0, 100)}...</p>
			</a>
		</div>
	);
};

const Footer = (props) => {
	const { price, id } = props;
	const dispatch = useDispatch();
	return (
		<div className="flex justify-between px-5 pb-8 items-center">
			<span className="text-xl text-white font-semibold ">
				$
				{price.toLocaleString("id-Id", { styles: "currency", currency: "USD" })}
			</span>
			<Button
				classname="bg-blue-500"
				onClick={() => dispatch(addToCart({ id, qty: 1 }))}
			>
				Add To Cart
			</Button>
		</div>
	);
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
