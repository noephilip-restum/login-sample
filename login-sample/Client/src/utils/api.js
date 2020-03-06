import axios from 'axios';

const baseUrl = 'http://localhost:4000';
let token = localStorage.getItem('token');

const req = {
	headers: {
		'Content-Type': 'application/json',
		Authorization: `token ${token}`
	}
};

const get = (endpoint, data) => {
	return axios.get(`${baseUrl}${endpoint}`, data, req);
};

const post = (endpoint, data) => {
	return axios.post(
		`${baseUrl}${endpoint}`,
		data,
		endpoint !== '/login' ? req : null
	);
};

const patch = (endpoint, data) => {
	return axios.patch(
		`${baseUrl}${endpoint}`,
		data,
		endpoint !== '/login' ? req : null
	);
};

const remove = (endpoint, data) => {
	return axios.delete(
		`${baseUrl}${endpoint}`,
		data,
		endpoint !== '/login' ? req : null
	);
};

export { get, patch, post, remove };
