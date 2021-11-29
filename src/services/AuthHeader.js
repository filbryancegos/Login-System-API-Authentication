import axios from "axios";
export default function authHeader() {
	const token = localStorage.getItem('token')

	if (token) {
		 axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
		return { 
			'Authorization': `Bearer ${token}`,
			'Accept': 'application/json'
		};
	} else {
		console.log('amangssdgs');
		return {
			Accept: 'application/json',
		};
	}
}