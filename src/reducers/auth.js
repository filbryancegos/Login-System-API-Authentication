import {
    LOGIN,
    REGISTER,
    VERIFY,
    LOGOUT
  } from "../actions/types";

  const initialState = {
        user: {},
        isLogin: localStorage.getItem('login') || '',
        username: localStorage.getItem('user') || '',
  };
  
  function authReducer(user = initialState, action) {
    const { type, payload } = action;
    if (type === LOGIN ) {
        return {
            ...user,
            user: payload.user, 
            isLogin: true,
            username: payload.user.full_name
        }
    }

    if (type === REGISTER) {
        return {
            ...user,
            user: payload.user, 
            isLogin: false
        }
    }

    if (type === VERIFY) {
        return {
            ...user,
            isLogin: true
        }
    }

    if (type === LOGOUT) {
        return {
            ...user,
            user: {}, 
            isLogin: false,
            username: ''
        }
    }

    return user

  };
  
  export default authReducer;