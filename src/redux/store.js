import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import itemsSlice from './slices/itemsSlice';

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		items: itemsSlice,
	},
});
