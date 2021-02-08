import { LOGIN, LOGOUT } from '../actions/type';

const getToken = () => {
  // TODO localStorage Token valid check API
  return localStorage.getItem('token') ? true : false;
};

const setToken = () => {
  return localStorage.getItem('token');
};

const initialState = {
  isLogin: getToken(),
  token: getToken() ? setToken() : null,
};

const user = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOGIN:
      return { isLogin: true, token: payload };
    case LOGOUT:
      return { isLogin: false, token: null };
    default:
      return state;
  }
};

export default user;
