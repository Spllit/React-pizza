import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import paginationSlice from './slices/paginationSlice';
import itemsSlice from './slices/itemsSlice';

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		pagination: paginationSlice,
		items: itemsSlice,
	},
});
