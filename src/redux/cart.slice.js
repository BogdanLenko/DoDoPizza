import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
};

export const cartSlice = createSlice({
		name: 'cart',
		initialState,
		reducers: {
			addToCart: (state, {payload}) => {
				const currentPizza = state.cart.find((item) => item.params === payload.params);
				if (currentPizza) {
					state.cart = state.cart.map((item) => {
						if (item.params === payload.params) {
							item.amount += 1;
						}
						return item;
					});
				} else {
					state.cart.push({...payload, amount: 1});
				}
			},
			removeFromCart: (state, {payload}) => {
				const params = payload;
				state.cart = state.cart.filter((item) => item.params !== params);
			},
			clearCart: (state) => {
				state.cart = [];
			},
			incrementAmount: (state, {payload}) => {
				const params = payload;
				state.cart = state.cart.map((item) => {
					if (item.params === params) {
						item.amount += 1;
					}
					return item;
				});
			},
			decrementAmount: (state, {payload}) => {
				const params = payload;
				state.cart = state.cart.map((item) => {
					if (item.params === params) {
						item.amount -= 1;
						if (item.amount < 1) {
							item.amount = 1;
						}
					}
					return item;
				});
			}
		}
	}
);

export const {actions, reducer} = cartSlice;
