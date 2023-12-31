import axios from 'axios';

async function getData(queryString) {
	const { data } = await axios.get(queryString);
	return data;
}
async function postData(pizzaCard){
	const urlAdress = 'https://62d70e4e49c87ff2af3231e5.mockapi.io/cart'
	const {data} = await axios.post(urlAdress, pizzaCard)
	return data
} 
async function clearData(mokapiID){
	const urlAdress = `https://62d70e4e49c87ff2af3231e5.mockapi.io/cart/${mokapiID}`
	await fetch(urlAdress, {
		method: 'DELETE'
	})
}
export  {getData, postData, clearData};
