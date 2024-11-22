import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { reducer as cartReducer } from './cart.slice.js'
import { reducer as filterReducer } from './filter.slice.js'

const reducers = combineReducers({
	cart: cartReducer,
	filter: filterReducer,
})

export const store = configureStore({
	reducer: reducers
})