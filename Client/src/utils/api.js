import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');
const baseUrl = 'http://localhost:4000';

const req = {
	headers: {
		'Content-Type': 'application/json',
		Authorization: `token ${token}`
	}
};

const get = async endpoint => {
	return await axios.get(`${baseUrl}${endpoint}`, req);
};

const post = async (endpoint, data) => {
	return await axios.post(`${baseUrl}${endpoint}`, data, req);
};

const patch = async (endpoint, data) => {
	return await axios.patch(`${baseUrl}${endpoint}`, data, req);
};

const remove = async (endpoint, data) => {
	return await axios.delete(`${baseUrl}${endpoint}`, data, req);
};

export { get, patch, post, remove };
