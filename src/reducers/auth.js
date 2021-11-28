import {
    LOGIN,
    REGISTER,
    VERIFY,
    LOGOUT
  } from "../actions/types";

  const initialState = {
      token: localStorage.getItem('token') || '',
      user: {},
      isLogin: false
  };
  
  function authReducer(user = initialState, action) {
    const { type, payload } = action;
    if (type === LOGIN ) {
        return {
            ...user,
            token: payload.access_token,
            user: payload.user, 
            isLogin: true
        }
    }

    if (type === REGISTER) {
        console.log(payload);
        return {
            ...user,
            token: payload.access_token,
            user: payload.user, 
            isLogin: false
        }
    }

    if (type === VERIFY) {
        console.log('verify');
        return {
            ...user,
            isLogin: true
        }
    }

    if (type === LOGOUT) {
        console.log("logout brutos");
        return {
            ...user,
            token: '',
            user: {}, 
            isLogin: false
        }
    }

    return user

  };
  
  export default authReducer;