import {useContext} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PizzaCard from '../PizzaCard/PizzaCard';
import Skeleton from '../Skeleton/Skeleton';
import Paginate from '../Paginate/Paginate'
import styles from './styles/Home.module.scss';
import { useSelector } from 'react-redux';
import AppContext from '../../Context/Context';

export default function Home() {
	const {isLoading} = useContext(AppContext)
	const { items } = useSelector((state) => state.items);
	let index = 0;

	const renderCards = () => {
		if (isLoading) {
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
					<PizzaCard {...item}/>
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
