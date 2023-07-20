import React from 'react';
import styles from './CartItem.module.scss';
import { ButtonCircle } from '../Buttons/Buttons';
export default function CartItem({ name, description, price, amount, src, onAmountChange, deletePizza }) {
	return (
		<div className={styles.item}>
			<div className={styles.img}>
				<img
					src={src}
					alt="Pizza"
				/>
			</div>
			<div className={styles.info}>
				<h3>{name}</h3>
				<p>{`${description.type}, ${description.size} см`}</p>
			</div>
			<div className={styles.count}>
				<ButtonCircle innerIcon={'plus'} 
				action = {() => onAmountChange(amount + 1)}/>
				<b>{amount}</b>
				<ButtonCircle innerIcon={'minus'} 
				action = {() => amount > 0 ? onAmountChange(amount - 1) : onAmountChange(0)}/>
			</div>
			<div className={styles.price}>
				<b>{price * amount} ₽</b>
			</div>
			<div className={styles.remove}>
				<ButtonCircle innerIcon={'remove'} 
				action = {deletePizza}/>
			</div>
		</div>
	);
}
