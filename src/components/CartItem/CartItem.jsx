import React from 'react';
import styles from './CartItem.module.scss';
import { ButtonCircle } from '../Buttons/Buttons';
export default function CartItem({ name, description, cost, number, src }) {
	return (
		<div className={styles.item}>
			<div className={styles.img}>
				<img
					src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
					alt="Pizza"
				/>
			</div>
			<div className={styles.info}>
				<h3>Сырный цыпленок</h3>
				<p>тонкое тесто, 26 см.</p>
			</div>
			<div className={styles.count}>
				<ButtonCircle innerIcon={'plus'} />
				<b>10</b>
				<ButtonCircle innerIcon={'minus'} />
			</div>
			<div className={styles.price}>
				<b>770 ₽</b>
			</div>
			<div className={styles.remove}>
				<ButtonCircle innerIcon={'remove'} />
			</div>
		</div>
	);
}
