import React, {useState, useRef, useEffect} from 'react';
import style from './Header.module.scss';
import { ButtonCart } from '../Buttons/Buttons';
import { Link, useLocation } from 'react-router-dom';
import Search from '../Search/Search';
import { useSelector } from 'react-redux';

export default function Header({ search }) {
	const currentLocation = useLocation()
	const [isCart, setIsCart] = useState(false)
	const [scrollDirection, setScrollDirection] = useState('up')
	const prevScrollPosition = useRef(0)
	const scrollPosition = useRef(window.scrollY)
	const {totalAmount, totalPrice} = useSelector(state => state.cart)
	useEffect(() => {
		if(currentLocation.pathname === '/cart') setIsCart(true)
		else setIsCart(false)
	}, [currentLocation])
	window.addEventListener('scroll', () => {
		scrollPosition.current = window.scrollY

		if(scrollPosition.current > prevScrollPosition.current) setScrollDirection(() => 'down')
		else if(scrollPosition.current < prevScrollPosition.current) setScrollDirection(() => 'up')
				
		prevScrollPosition.current = scrollPosition.current
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
					{
						!isCart && (
							<Link to="/cart">
								<ButtonCart 
								amount = {totalAmount}
								price = {totalPrice}
								scrollDirection = {scrollDirection}/>
							</Link>
						)
					}
					
				</div>
			</div>
		</div>
	);
}
