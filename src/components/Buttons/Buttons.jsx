import React from 'react';
import styles from './Buttons.module.scss';

function ButtonAdd({ amount, onClick }) {
	return (
		<button
			className={`${styles.button} ${styles.buttonOutline} ${styles.buttonAdd}`}
			onClick={onClick}>
			<svg
				width="12"
				height="12"
				viewBox="0 0 12 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
					fill="white"
				/>
			</svg>
			<span>Добавить</span>
			<i>{amount}</i>
		</button>
	);
}
function ButtonCart({scrollDirection}) {
	return (
		<button>
			<div className={scrollDirection === 'down' ?`${styles.button} ${styles.buttonCart} ${styles.hideButton}` : `${styles.button} ${styles.buttonCart}`}>
				<span>520 ₽</span>
				<div className={styles.buttonDelimiter}></div>
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
						stroke="white"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
						stroke="white"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
						stroke="white"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<span>3</span>
			</div>
		</button>
	);
}
function ButtonDark() {
	return (
		<button
			className={`${styles.button} ${styles.buttonOutline} ${styles.buttonAdd} ${styles.buttonDark}`}>
			<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7 13L1 6.93015L6.86175 1"
					stroke="#D3D3D3"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<span>Вернуться назад</span>
		</button>
	);
}
function ButtonPrimary() {
	return (
		<button className={styles.button}>
			<span>Оплатить сейчас</span>
		</button>
	);
}
function ButtonCircle({ innerIcon }) {
	const plus = (
		<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
				fill="#EB5A1E"
			/>
			<path
				d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
				fill="#EB5A1E"
			/>
		</svg>
	);
	const minus = (
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z"
				fill="#FE5F1E"
			/>
		</svg>
	);
	const remove = (
		<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
				fill="#EB5A1E"
			/>
			<path
				d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
				fill="#EB5A1E"
			/>
		</svg>
	);
	const getInnerIcon = () => {
		switch (innerIcon) {
			case 'plus':
				return plus;
			case 'minus':
				return minus;
			case 'remove':
				return remove;
			default:
				console.log('Задано не верное значение');
		}
	};
	return (
		<button
			className={`${styles.buttonCircle} ${styles.buttonOutline} ${styles.button} ${
				innerIcon === 'remove' ? styles.circleBlack : null
			}`}>
			{getInnerIcon()}
		</button>
	);
}
function PaginationButton({ index }) {
	return (
		<button className={`${styles.buttonCircle} ${styles.buttonOutline} ${styles.button}`}>
			{index}
		</button>
	);
}
export { ButtonAdd, ButtonCart, ButtonDark, ButtonPrimary, ButtonCircle, PaginationButton };
