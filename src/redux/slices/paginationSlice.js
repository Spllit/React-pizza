import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentPageIndex: 1,
};

const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setCurrentPageIndex(state, active) {
			state.currentPageIndex = active.payload;
		},
	},
});

export const { setCurrentPageIndex } = paginationSlice.actions;
export default paginationSlice.reducer;
