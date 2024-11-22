import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	sort: [{
		name: 'By popularity',
		sortProperty: 'rating'
	},
		{
			name: 'By price',
			sortProperty: 'price'
		}],
	activeSort: {
		name: 'By popularity',
		sortProperty: 'rating'
	},
	isVisiblePopup: false
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, {payload}) {
			state.categoryId = payload;
		},
		setActiveCategory(state, {payload}) {
			state.activeSort = payload;
		},
		setIsVisiblePopup(state, {payload}) {
			state.isVisiblePopup = payload;
		}
	}
});

export const {reducer, actions} = filterSlice;