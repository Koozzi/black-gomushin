import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

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
