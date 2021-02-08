import axios from 'axios';
import store from '../store/index';

const AUTH_TOKEN = store.getState().user.token;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN || null;

export const getAxios = (reqUrl) =>
  axios
    .create({
      baseURL: 'http://127.0.0.1:5000',
      method: 'get',
      timeout: 10000,
    })
    .request({ url: reqUrl });

export const postAxios = (reqUrl, reqData) =>
  axios
    .create({
      baseURL: 'http://127.0.0.1:5000',
      method: 'post',
      timeout: 10000,
    })
    .request({ url: reqUrl, data: reqData });
