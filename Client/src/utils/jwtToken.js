import jwtDecode from 'jwt-decode';
import cookies from 'js-cookie';

export default function jwtToken() {
	return cookies.get('token') ? jwtDecode(cookies.get('token')) : null;
}
