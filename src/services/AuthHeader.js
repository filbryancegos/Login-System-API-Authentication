export default function authHeader() {
	const token = localStorage.getItem('token')
    console.log(token, 'wala');
	if (token) {
		return { 
			Authorization: `Bearer ${token}`,
			Accept: 'application/json'
		};
	} else {
		return {
			Accept: 'application/json',
		};
	}
}