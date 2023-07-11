import { useEffect, useState, useCallback, useRef } from 'react';
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
import { setFilters, setItemsQty } from '../redux/slices/filterSlice';
export default function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { sortBy, category, categories, searchValue, currentPageIndex } = useSelector((state) => state.filter);
	const { items } = useSelector((state) => state.items);
	const [isLoading, setIsLoading] = useState(true);
	const isMounted = useRef(false)
	const isLoaded = useRef(false)
	useEffect(() => {
		if(isMounted.current){
			const queryString = qs.stringify({
				sortBy,
				category,
				currentPageIndex,
				search: searchValue
			});
			console.log(queryString);
			navigate(`?${queryString}`);
		}
		isMounted.current = true
		setIsLoading(true);
		/* запрос на сервер*/
		onSearch()
	}, [sortBy, category, currentPageIndex]);

	const createSearch = useCallback(
		debounce((searchString) => {
			search(searchString);
		}, 1000),
		[],
	);
	const onSearch = async (searchString = '') => {
		const getSortedItems = await getData(generateUrlString(searchString, currentPageIndex, 6))
		const getAllItems = await getData(generateUrlString(searchString))
		
		return Promise.all([getSortedItems, getAllItems]).then(res => {
			processResponse(res[0], res[1])
		})
	}
	const search = (searchString) => {
		if (typeof searchString !== 'string') return;
		else if (!searchString.length) {
			onSearch()
			return;
		}
		onSearch(searchString)
	};

	const processResponse = (items, QtyItems) => {
		dispatch(setItems(items));
		dispatch(setItemsQty(QtyItems.length));
		setIsLoading(false);
	};
	// Генерим строку параметров
	const generateUrlString = (searchString, currentPageIndex, limit ) => {
		const url = new URL(`https://62d70e4e49c87ff2af3231e5.mockapi.io/catalog`);
		if (typeof searchString !== 'undefined' && searchString.length) {
			url.searchParams.append('search', searchString);
			return url;
		}
		if (category !== 'Все') {
			url.searchParams.append(`category`, categories.indexOf(category));
		}
		url.searchParams.append(`sortBy`, sortBy);
		if(currentPageIndex || limit){
			url.searchParams.append(`p`, currentPageIndex);
			url.searchParams.append(`l`, limit);
		}
		return url;
	};

	return (
		<AppContext.Provider
			value={{
				items,
			}}>
			<div fluid="xxl">
				<div className={style.wrapper}>
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
											<Home loading={isLoading}
												onSearch = {() => onSearch()}
											/>
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
