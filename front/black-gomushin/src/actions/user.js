import { LOGIN, LOGOUT } from './type';

export const login = (token) => ({
  type: LOGIN,
  payload: token,
});

export const logout = () => ({
  type: LOGOUT,
});
