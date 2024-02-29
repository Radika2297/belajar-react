import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className="flex justify-center min-h-screen items-center flex-col">
			<h1 className="text-red-700 text-3xl mb-4">Oops!</h1>
			<p className="text-slate-700 text-lg mb-3">
				Sorry , an unexpected error has occured
			</p>
			<p className="text-slate-700 text-lg mb-3">
				{error.statusText || error.message}
			</p>
		</div>
	);
};

export default ErrorPage;
