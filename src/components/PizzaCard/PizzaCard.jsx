import React, { useState } from 'react';
import style from './PizzaCard.module.scss';
import { PizzaCardSelector } from '../PizzaCardSelector.jsx/PizzaCardSelector';
import { ButtonAdd } from '../Buttons/Buttons';

export default function PizzaCard({ title, price, types, sizes, imageUrl }) {
	const [amount, setAmount] = useState(0);
	const [currentPizzaType, setCurrentPizzaType] = useState(types[0]);
	const [currentPizzaSize, setCurrentPizzaSize] = useState(sizes[0]);
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
				<ButtonAdd amount={amount} onClick={() => setAmount(() => amount + 1)} />
			</div>
		</div>
	);
}
