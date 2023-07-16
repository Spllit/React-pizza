import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchvalue } from '../../redux/slices/filterSlice';
import styles from './Search.module.scss';

export default function Search({ search }) {
	const inputRef = useRef();
	const dispatch = useDispatch();
	const { searchValue } = useSelector((state) => state.filter);
	// const [value, setValue] = useState('');
	useEffect(() => {
		search(searchValue);
	}, [searchValue]);
	return (
		<div className={styles.formWrapper}>
			<form className={styles.form}>
				<svg enableBackground="new 0 0 26 26" version="1.1" viewBox="0 0 26 26">
					<path d="M14.9462891,1C9.4033203,1,4.8935547,5.5097656,4.8935547,11.0532227  c0,2.5022583,0.9248047,4.7885132,2.4428101,6.5498657l-6.1166382,6.1166382c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C1.3662109,24.9267578,1.5576172,25,1.75,25s0.3837891-0.0732422,0.5302734-0.2197266l6.1165771-6.1165771  c1.7612305,1.5180054,4.0474243,2.442749,6.5494385,2.442749C20.4902344,21.1064453,25,16.5966797,25,11.0532227  S20.4902344,1,14.9462891,1z M14.9462891,19.6064453c-4.7158203,0-8.5527344-3.8369141-8.5527344-8.5532227  S10.2304688,2.5,14.9462891,2.5C19.6630859,2.5,23.5,6.3369141,23.5,11.0532227S19.6630859,19.6064453,14.9462891,19.6064453z" />
				</svg>
				<input
					ref={inputRef}
					type="search"
					placeholder="Введите запрос..."
					className={styles.input}
					value={searchValue}
					onChange={(e) => dispatch(setSearchvalue(e.target.value))}
				/>
			</form>
		</div>
	);
}
