import React, { useState, useEffect} from 'react';
import style from './PizzaCard.module.scss';
import { PizzaCardSelector } from '../PizzaCardSelector.jsx/PizzaCardSelector';
import { ButtonAdd } from '../Buttons/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import {addItems, updateItem} from '../../redux/slices/cartSlice'

export default function PizzaCard({id, title, price, types, sizes, imageUrl, addNewPizza, updatePizzaInCart}) {
	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.cart.cartItems)
	const [amount, setAmount] = useState(0);
	const [currentPizzaType, setCurrentPizzaType] = useState(types[0]);
	const [currentPizzaSize, setCurrentPizzaSize] = useState(sizes[0]);
	// проверяем если выбранная пицца уже есть в корзине и возвращаем ее индекс в массиве стора
	const existentItemIndex = cartItems.findIndex(item => {
		const pizza = item.pizza
		return (pizza.id === id) && (pizza.currentPizzaSize === currentPizzaSize) && (pizza.currentPizzaType === currentPizzaType)
	})
	// увелчичиваем количество пиццы в state 
	const onAddClick = () => setAmount(() => amount + 1)

	useEffect(() => {
		if(existentItemIndex !== -1){
			setAmount(() => cartItems[existentItemIndex].pizza.amount)
		}
		else{
			setAmount(0)
		}
	}, [currentPizzaType, currentPizzaSize])
	return (
		<div className={style.pizzaCard}>
			<img className={style.image} src={imageUrl} alt={title} />
			<h4 className={style.title}>{title}</h4>
			<PizzaCardSelector
				pizzaType={types}
				pizzaSize={sizes}
				onTypeSelectorClick={(type) => setCurrentPizzaType(type)}
				onSizeSelectorClick={(size) => setCurrentPizzaSize(size)}
				currentPizzaType={currentPizzaType}
				currentPizzaSize={currentPizzaSize}
			/>
			<div className={style.bottom}>
				<div className={style.price}>от {price} ₽</div>
				<ButtonAdd amount={amount} onClick={() => {
					onAddClick()
					if(existentItemIndex !== -1){
						console.log(`cartItems[existentItemIndex].mokapiID: ${cartItems[existentItemIndex].mokapiID}`)
						updatePizzaInCart(
							existentItemIndex,
							Number(cartItems[existentItemIndex].mokapiID),
							{
								id,
								title,
								price,
								amount: amount + 1,
								currentPizzaSize,
								currentPizzaType,
								imageUrl
							}
						) 
					}
					else{
						addNewPizza({
							id,
							title, 
							price, 
							amount: amount + 1, 
							currentPizzaSize, 
							currentPizzaType, 
							imageUrl
						})
					}

				}} />
			</div>
		</div>
	);
}
