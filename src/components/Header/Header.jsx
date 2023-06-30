import React from 'react';
import style from './Header.module.scss';
import { ButtonCart } from '../Buttons/Buttons';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

export default function Header({ search }) {
	return (
		<div className={style.header}>
			<div className={style.container}>
				<Link to="/">
					<div className={style.logo}>
						<img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
						<div>
							<h1>React Pizza</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</Link>
				<Search search={(value) => search(value)} />
				<Link to="/cart">
					<ButtonCart />
				</Link>
			</div>
		</div>
	);
}
