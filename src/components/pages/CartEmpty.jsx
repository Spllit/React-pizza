import React from 'react';
import {ButtonDark} from '../Buttons/Buttons'
import styles from './styles/CartTemplate.module.scss'
function CartEmpty() {
	return (
		<div className={`${styles.template}`}>
			<h2>
				Корзина пустая 
			</h2>
			<p>
				Вероятней всего, вы не заказывали ещё пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img src="/img/empty-cart.png" alt="Empty cart" />
			<ButtonDark/>
		</div>
	);
}
export {CartEmpty}