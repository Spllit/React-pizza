import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	totalAmount: 0,
	cartItems: []
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setTotalPrice(state, action){
			state.totalPrice = action.payload
		},
		setTotalAmount(state, action){
			state.totalAmount = action.payload
		},
		addItems(state, action) {
			state.cartItems.push({
				pizza: action.payload.pizza,
				mokapiID: action.payload.id
			})
		},
		setNewCart(state, action){
			state.cartItems = action.payload
		},
		updateItem(state, action){
			state.cartItems[action.payload.cartID] = {
				pizza: action.payload.pizza,
				mokapiID: action.payload.id
			}
		},
		updateAmount(state,action){
			state.cartItems[action.payload.index].amount = action.payload.amount
		},
		removeItems(state, action){
			state.cartItems = state.cartItems.filter((obj, index) => index !== action.payload)
		},
		clearCart(state, action){
			state.cartItems = []
		}
	},
});

export const {addItems, updateItem, updateAmount,setTotalPrice, setTotalAmount, removeItems, clearCart, setNewCart} = cartSlice.actions;
export default cartSlice.reducer;
