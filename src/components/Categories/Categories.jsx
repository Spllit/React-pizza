import React from 'react';
import style from './Categories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/slices/filterSlice';
import { setCurrentPageIndex } from '../../redux/slices/filterSlice';

function Categories(props) {
	const dispatch = useDispatch();
	const category = useSelector((state) => state.filter.category);
	return (
		<div className={style.categories}>
			<ul>
				{React.Children.map(props.children, (child) => {
					return React.cloneElement(child, {
						className: child.props.textContent === category ? style.active : null,
						setActive: () => {
							dispatch(setCategory(child.props.textContent));
							dispatch(setCurrentPageIndex(1));
							if (child.props.textContent === category) {
								dispatch(setCategory('Все'));
							}
						},
					});
				})}
			</ul>
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
