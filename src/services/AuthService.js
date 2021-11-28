import http from "../http-common";
import authHeader  from './AuthHeader'

const login = (data) => {
    return http.post("/login", data);
};

const register = (data) => {
    return http.post("/register", data);
}

const verify = (data) => {
    return http.post("/verification/verify", data, { headers: authHeader()});
}

const logout = () => {
    return http.post("/logout", { headers: authHeader()} );
}

const AuthService = {
    login,
    register,
    verify,
    logout
}

export default AuthService