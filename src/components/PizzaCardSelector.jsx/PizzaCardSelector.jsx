import React from 'react';
import style from './PizzaCardSelector.module.scss';
function PizzaCardSelector({
	pizzaType,
	pizzaSize,
	onTypeSelectorClick,
	onSizeSelectorClick,
	currentPizzaType,
	currentPizzaSize,
}) {

	const renderSelector = (pizzaProp, actionOnClick, activeProp) => {
		return pizzaProp.map((item, i) => {
			let className = activeProp === pizzaProp[i] ? style.active : null;
			return (
				<li className={className} onClick={() => actionOnClick(item)} key={item}>
					{ typeof pizzaProp[i] == 'string' ? pizzaType[i] : `${item} см`}
				</li>
			);
		});	
	};
	return (
		<div className={style.pizzaCardSelector}>
			<ul>{renderSelector(pizzaType, onTypeSelectorClick, currentPizzaType)}</ul>
			<ul>{renderSelector(pizzaSize, onSizeSelectorClick, currentPizzaSize)}</ul>
		</div>
	);
}
export { PizzaCardSelector };
