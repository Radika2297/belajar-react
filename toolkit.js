/* eslint-disable no-unused-vars */
// import toolkit from "@reduxjs/toolkit";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const { configureStore, createAction, createReducer } = toolkit;

// const initialState = {
// 	cart: [],
// };

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
	builder.addCase(addToCart, (state, action) => {
		state.push(action.payload);
	});
});

const login = createAction("CREATE_SESION");

const loginReducer = createReducer({ status: false }, (builder) => {
	builder.addCase(login, (state, action) => {
		state.status = true;
	});
});

const store = configureStore({
	reducer: {
		login: loginReducer,
		cart: cartReducer,
	},
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
	console.log("STORE CHANGE : ", store.getState());
});

// const action = { type: "ADD_TO_CART", payload: { id: 10, qty: 20 } };
// const action = addToCart({id:1, qyt:5})

store.dispatch(addToCart({ id: 1, qyt: 5 }));
store.dispatch(addToCart({ id: 2, qyt: 15 }));
store.dispatch(login());
