import axios from 'axios'
import Cookies from 'js-cookie'

export const axiosWithoutAuth = axios.create({baseURL :  "http://localhost:8080/api"});

export const axiosWithAuth = axiosWithoutAuth.interceptors.request.use((config) => {
	config.headers['Authorization'] = `Bearer ${Cookies.get('accessToken')}`;
	return config
})