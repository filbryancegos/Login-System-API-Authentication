import http from "../http-common";
import authHeader  from './AuthHeader'
import axios from "axios";

const login = (data) => {
    return http.post("/login", data);
};

const register = (data) => {
    return http.post("/register", data);
}

const verify = (data) => {
    return http.post("/verification/verify", data, {headers: authHeader()});
}

const logout = () => {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios
		.post(`https://api.baseplate.appetiserdev.tech/api/v1/auth/logout`, { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
}

const AuthService = {
    login,
    register,
    verify,
    logout
}

export default AuthService