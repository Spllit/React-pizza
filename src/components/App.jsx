import React, { useEffect, useState, useCallback } from 'react';
import style from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Sort from './Sort/Sort';
import Header from './Header/Header';
import { Cart } from './Cart/Cart';
import { Categories, CategoriesItems } from './Categories/Categories';
import { Routes, Route } from 'react-router-dom';
import AppContext from '../Context/Context';
import getData from '../services/getData';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../redux/slices/itemsSlice';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

export default function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { sortBy, category, categories } = useSelector((state) => state.filter);
	const { currentPageIndex } = useSelector((state) => state.pagination);
	const { items } = useSelector((state) => state.items);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true);
		/* запрос на сервер*/
		getData(generateSearchString()).then((result) => {
			processResponse(result);
		});
	}, [sortBy, category, currentPageIndex]);

	const createSearch = useCallback(
		debounce((searchString) => {
			search(searchString);
		}, 1000),
		[],
	);

	const search = (searchString) => {
		if (typeof searchString !== 'string') return;
		else if (!searchString.length) {
			getData(generateSearchString()).then((result) => {
				processResponse(result);
			});
			return;
		}
		getData(generateSearchString(searchString)).then((result) => {
			processResponse(result);
		});
	};
	const processResponse = (result) => {
		dispatch(setItems(result));
		setIsLoading(false);
	};
	const generateSearchString = (searchString) => {
		const url = new URL(`https://62d70e4e49c87ff2af3231e5.mockapi.io/catalog`);
		if (typeof searchString !== 'undefined' && searchString.length) {
			url.searchParams.set('search', searchString);
			return url;
		}
		if (category !== 'Все') {
			url.searchParams.set(`category`, categories.indexOf(category));
		}
		url.searchParams.set(`sortBy`, sortBy);
		url.searchParams.set(`p`, currentPageIndex);
		url.searchParams.set(`l`, 6);
		return url;
	};
	useEffect(() => {
		const queryString = qs.stringify({
			sortBy,
			category,
			currentPageIndex,
		});
		console.log({
			sortBy,
			category,
			currentPageIndex,
		});
		console.log(queryString);
		navigate(`?${queryString}`);
	}, [sortBy, category, currentPageIndex]);
	return (
		<AppContext.Provider
			value={{
				items,
			}}>
			<div fluid="xxl">
				<div className={style.wrapper}>
					<Routes>
						<Route path="*"></Route>
					</Routes>
					<Header search={(value) => createSearch(value)} />
					<div className={style.content}>
						<div className={style.container}>
							<Routes>
								<Route
									path="/"
									element={
										<>
											<div className={style.contentTop}>
												<Categories>
													{categories.map((item) => (
														<CategoriesItems key={item} textContent={item} />
													))}
												</Categories>
												<Sort />
											</div>
											<h2 className={style.contentTitle}>{category} пиццы</h2>
											<Home loading={isLoading} />
										</>
									}></Route>
								<Route path="/cart" element={<Cart />}></Route>
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
}
