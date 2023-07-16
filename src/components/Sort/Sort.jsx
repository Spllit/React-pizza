import React, { useState } from 'react';
import style from './Sort.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSortBy } from '../../redux/slices/filterSlice';

export default function Sort() {
	const sortBy = useSelector((store) => store.filter.sortBy);
	const dispatch = useDispatch();
	const [popupIsOpen, setPopupIsOpen] = useState(false);
	const sortMap = {
		rating: 'по популярности',
		price: 'по цене',
		title: 'по алфавиту',
	};
	return (
		<div className={style.sort} onClick={() => setPopupIsOpen(() => !popupIsOpen)}>
			<div className={style.label}>
			<svg fill="#000" height="25" viewBox="0 0 16 16" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>
				<b>Сортировать : </b>
				<span>{sortMap[sortBy]}</span>
			</div>
			{popupIsOpen && (
				<div className={style.popup}>
					<ul>
						<li
							className={sortBy === 'rating' ? style.active : null}
							onClick={() => dispatch(setSortBy('rating'))}>
							по популярности
						</li>
						<li
							className={sortBy === 'price' ? style.active : null}
							onClick={() => dispatch(setSortBy('price'))}>
							по цене
						</li>
						<li
							className={sortBy === 'title' ? style.active : null}
							onClick={() => dispatch(setSortBy('title'))}>
							по алфавиту
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}
