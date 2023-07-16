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
			state.sortBy = active.payload.sortBy
			state.category = active.payload.category
			state.searchValue = active.payload.searchValue
			state.currentPageIndex = Number(active.payload.currentPageIndex);
		}
	},
});

export const { setSortBy, setCategory, setSearchvalue, setCurrentPageIndex,setItemsQty, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
