// import {useCallback, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PizzaCard from '../PizzaCard/PizzaCard';
import Skeleton from '../Skeleton/Skeleton';
import Paginate from '../Paginate/Paginate'
import styles from './Home.module.scss';
// import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
// import { setCurrentPageIndex, setFilters } from '../../redux/slices/filterSlice';
// import qs from 'qs';


export default function Home({loading}) {

	const { items } = useSelector((state) => state.items);
	let index = 0;

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
				<Paginate/>
			</div>
		</Container>
	);
}
