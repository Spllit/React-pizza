import axios from 'axios';

async function getData(queryString) {
	const { data } = await axios.get(queryString);

	return data;
}
export default getData;
