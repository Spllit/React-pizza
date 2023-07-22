import React from 'react';
import {ButtonDark} from '../Buttons/Buttons'
import styles from './styles/CartTemplate.module.scss'
function OrderMade() {
	return (
		<div className={`${styles.template}`}>
			<h2>
            Заказ оформлен
			</h2>
			<p>
                Ваш заказ скоро будет передан курьерской доставке
			</p>
			<img src="img/Ordered.jpg" alt="Order made" />
			<ButtonDark/>
		</div>
	);
}
export {OrderMade}