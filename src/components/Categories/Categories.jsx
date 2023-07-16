import React, {useState} from 'react';
import styles from './Categories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/slices/filterSlice';
import { setCurrentPageIndex } from '../../redux/slices/filterSlice';
import BurgerCategories from '../BurgerCategories/BurgerCategories'

function Categories(props) {
	const dispatch = useDispatch();
	const category = useSelector((state) => state.filter.category);
	const [open, setOpen] = useState(false)
	return (
		<div className={styles.categories}>
			<div className={styles.burger}>
				<BurgerCategories
				setOpen = {() => setOpen(!open)}/>
				{/* <div className={styles.body}> */}
					<ul className={open ? `${styles.list} ${styles.open}` : `${styles.list}`}>
						{React.Children.map(props.children, (child) => {
							return React.cloneElement(child, {
								className: child.props.textContent === category ? styles.active : null,
								setActive: () => {
									dispatch(setCategory(child.props.textContent));
									dispatch(setCurrentPageIndex(1));
									setOpen(false)
									if (child.props.textContent === category) {
										dispatch(setCategory('Все'));
									}
								},
							});
						})}
					</ul>
				{/* </div> */}
			</div>
		</div>
	);
}

function CategoriesItems({ textContent, className, setActive }) {
	return (
		<li className={className} onClick={setActive}>
			{textContent}
		</li>
	);
}
export { Categories, CategoriesItems };
