import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import styles from './styles/Cart.module.scss';
import { ButtonDark, ButtonPrimary } from '../Buttons/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart} from '../../redux/slices/cartSlice';
import AppContext from '../../Context/Context';


function ClearCart(){
	const {clearCart} = useContext(AppContext)
	return(
		<div 
				className={styles.clear}
				onClick={clearCart}
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.5 5H4.16667H17.5"
							stroke="#B6B6B6"
							strokeWidth="1.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
							stroke="#B6B6B6"
							strokeWidth="1.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M8.33337 9.16667V14.1667"
							stroke="#B6B6B6"
							strokeWidth="1.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M11.6666 9.16667V14.1667"
							stroke="#B6B6B6"
							strokeWidth="1.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span>Очистить корзину</span>
				</div>
	)
}
function CartHeader(){
	return(
		<h2 className={styles.title}>
					<svg
						width="31"
						height="31"
						viewBox="0 0 31 31"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z"
							stroke="#3F3F3F"
							strokeWidth="2.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z"
							stroke="#3F3F3F"
							strokeWidth="2.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825"
							stroke="#3F3F3F"
							strokeWidth="2.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					Корзина
				</h2>
	)
}
function Cart({updatePizzaInCart, deletePizza}) {
	const {setOrderMade, clearCart} = useContext(AppContext)
	const cartItems = useSelector(state => state.cart.cartItems)
	const {totalPrice, totalAmount} = useSelector(state => state.cart)

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{
					window.innerWidth <= 425 
					? (
						<>
							<ButtonDark />
							<CartHeader/>
							<ClearCart/>
						</>
						
					)
					: (
						<>
							<CartHeader/>
							<ClearCart/>
						</>
					)
				}
			</div>
			<div className={styles.items}>
				{
					cartItems.map((element, i) => {
						return (
							<CartItem 
								key={`${element.pizza.imageUrl}${i}`}
								name = {element.pizza.title}
								cardIndex = {i}
								onAmountChange = {(updatedAmount) => {
									const pizza = {
										...element.pizza,
										amount: updatedAmount
									}
									updatePizzaInCart(i, element.mokapiID, pizza)

								}}
								deletePizza = {() => deletePizza(element.mokapiID, i)}
								description={{
									type: element.pizza.currentPizzaType, 
									size: element.pizza.currentPizzaSize
								}}
								price = {element.pizza.price}
								amount = {element.pizza.amount}
								src = {element.pizza.imageUrl}
							/>	
						)
						
					})
				}
			</div>
			<div className={styles.bottom}>
				{
					totalPrice !== 0 && (
						<div className={styles.details}>
							<span>
								Всего пицц: <b>{totalAmount} шт.</b>
							</span>
							<span>
								Сумма заказа: <b>{totalPrice} ₽</b>
							</span>
						</div>
					)
				}
				
				<div className={styles.bottomButtons}>
					{
						window.innerWidth > 425 
						? (
							<>
								<ButtonDark />
								{
									totalPrice !== 0 && <ButtonPrimary
									action = {() => {
										clearCart()
										setOrderMade(true)
									}}/>
								}
							</>
						)
						: (
							totalPrice !== 0 && <ButtonPrimary
							action = {() => {
								clearCart()
								setOrderMade(true)
							}}/>
						)
					}
				</div>
			</div>
		</div>
	);
}
export { Cart };
