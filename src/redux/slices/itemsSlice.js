import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

const itemsSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		setItems(state, active) {
			state.items = active.payload;
		},
	},
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
