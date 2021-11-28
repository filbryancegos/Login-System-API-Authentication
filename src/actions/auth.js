import {
    LOGIN,
    REGISTER,
    VERIFY,
    LOGOUT
  } from "./types";

  import AuthService from "../services/AuthService";

  export const login = (data) => async (dispatch) => {
    try {
        const res = await AuthService.login(data);
        localStorage.setItem('token', res.data.data.access_token);
        localStorage.setItem('isLoggedin', 'isLoggedin');
        
        dispatch({
            type: LOGIN,
            payload: res.data.data,
        });
  
      return Promise.resolve(res.data.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const register = (data) => async (dispatch) => {
    try {
      const res = await AuthService.register(data);
      localStorage.setItem('token', res.data.data.access_token);
      dispatch({
        type: REGISTER,
        payload: res.data.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const verify = (data) => async (dispatch) => {
    try {
      const res = await AuthService.verify(data);
  
      dispatch({
        type: VERIFY,
        payload: res.data.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const logout = () => async (dispatch) => {
      console.log( 'ekging brutos');
    try {
      const res = await AuthService.logout()
      localStorage.setItem('isLoggedin', '');

      dispatch({
        type: LOGOUT,
      });

        return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };