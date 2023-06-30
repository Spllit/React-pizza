import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sortBy: 'rating',
	category: 'Все',
	categories: ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'],
	searchValue: '',
	// pageIndex: 1,
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSortBy(state, active) {
			state.sortBy = active.payload;
		},
		setCategory(state, active) {
			state.category = active.payload;
		},
		setSearchvalue(state, active) {
			state.searchValue = active.payload;
		},
	},
});

export const { setSortBy, setCategory, setSearchvalue } = filterSlice.actions;

export default filterSlice.reducer;
