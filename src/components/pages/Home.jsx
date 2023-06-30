import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PizzaCard from '../PizzaCard/PizzaCard';
import Skeleton from '../Skeleton/Skeleton';
import styles from './Home.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageIndex } from '../../redux/slices/paginationSlice';

export default function Home({ loading }) {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.items);
	const { currentPageIndex } = useSelector((state) => state.pagination);
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

	const handleClick = (e) => {
		window.scrollTo(0, 0);
		dispatch(setCurrentPageIndex(e.selected + 1));
	};
	return (
		<Container fluid="xxl">
			<Row className=" justify-content-sm-center justify-content-md-between justify-content-lg-start">
				{renderCards()}
			</Row>
			<div className={styles.container}>
				{console.log(currentPageIndex)}
				<ReactPaginate
					nextLabel=">"
					onPageChange={handleClick}
					pageRangeDisplayed={6}
					pageCount={4}
					previousLabel="<"
					forcePage={currentPageIndex - 1}
					containerClassName={styles.pagination}
					pageClassName={`${styles.page} ${styles.button}`}
					previousClassName={`${styles.page} ${styles.button}`}
					nextClassName={`${styles.page} ${styles.button}`}
					activeClassName={`${styles.pageActive} ${styles.button}`}
				/>
			</div>
		</Container>
	);
}
