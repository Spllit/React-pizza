import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sortBy: 'rating',
	category: 'Все',
	searchValue: '',
	currentPageIndex: 1,
	categories: ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'],
	itemsQty: 0
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
		setCurrentPageIndex(state, active) {
			state.currentPageIndex = active.payload;
		},
		setItemsQty(state, active){
			state.itemsQty = active.payload
		},
		setFilters(state, active){
			state.sortBy = active.payload
			state.category = active.payload
			state.searchValue = active.payload
			state.currentPageIndex = Number(active.payload);
		}
	},
});

export const { setSortBy, setCategory, setSearchvalue, setCurrentPageIndex,setItemsQty, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
