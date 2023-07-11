import {useCallback, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PizzaCard from '../PizzaCard/PizzaCard';
import Skeleton from '../Skeleton/Skeleton';
import Paginate from '../Paginate/Paginate'
import styles from './Home.module.scss';
// import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageIndex, setFilters } from '../../redux/slices/filterSlice';
import qs from 'qs';


export default function Home({ loading, onSearch }) {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.items);
	// const { currentPageIndex } = useSelector((state) => state.filter);
	let index = 0;
	// useEffect(() => {
	// 	const queryProps = window.location.search
	// 	if(queryProps){
	// 		const props =  qs.parse(queryProps, { ignoreQueryPrefix: true })
	// 		dispatch(
	// 			setFilters(
	// 				props
	// 			)
	// 		)
	// 	}
	// },[])

	const renderCards = () => {
		if (loading) {
			return [...new Array(10)].map(() => {
				return (
					<Col xs="12" sm="12" md="6" lg="4" key={index++}>
						<Skeleton />
					</Col>
				);
			});
		}
		return items.map((item) => {
			return (
				<Col xs="12" sm="12" md="6" lg="4" key={item.id}>
					<PizzaCard {...item} />
				</Col>
			);
		});
	};

	return (
		<Container fluid="xxl">
			<Row className=" justify-content-sm-center justify-content-md-between justify-content-lg-start">
				{renderCards()}
			</Row>
			<div className={styles.container}>
				{/* {console.log(currentPageIndex)} */}
				<Paginate
				onSearch = {() => onSearch()}
				/>
			</div>
		</Container>
	);
}
