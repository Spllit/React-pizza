import React, {useState, useEffect, useRef} from 'react';
import style from './Header.module.scss';
import { ButtonCart } from '../Buttons/Buttons';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
// import useScrollEffect from '../../customHooks/useScrollEffect';

export default function Header({ search }) {
	const [scrollDirection, setScrollDirection] = useState('up')
	const prevScrollPosition = useRef(0)
	const scrollPosition = useRef(window.scrollY)
	// useEffect(() => {
	// 	prevScrollPosition.current(window.scrollY)
	// }, [])
	window.addEventListener('scroll', () => {
		scrollPosition.current = window.scrollY
		// console.log(scrollPosition.current)
		// console.log(prevScrollPosition.current)
		if(scrollPosition.current > prevScrollPosition.current) {
			setScrollDirection(() => 'down'); 
			// prevScrollPosition.current = scrollPosition
			console.log('down')
		}
		else if(scrollPosition.current < prevScrollPosition.current) {
			setScrollDirection(() => 'up'); 
			// prevScrollPosition.current = scrollPosition
			console.log('up')
	}
	prevScrollPosition.current = scrollPosition.current
		// prevScrollPosition.current = scrollPosition
	})
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
				<div className="cart">
					<Link to="/cart">
						<ButtonCart 
						scrollDirection = {scrollDirection}/>
					</Link>
				</div>
			</div>
		</div>
	);
}
