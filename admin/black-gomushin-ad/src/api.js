import axios from "axios";

// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };

// const bodyParameters = {
//   key: "value",
// };
const token = localStorage.getItem("Token");

const api = axios.create({
  baseURL: "http://13.125.216.179:8000/",
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export const postApi = {
  loginApi: (req) => api.post("login/", req),
};

// export const postApi = axios.create({
//   baseURL: "http://13.125.216.179:8000/",
//   method: "post",
// });

// export const getApi = axios.create({
//   baseURL: "http://13.125.216.179:8000/",
//   method: "get",
// });

export const getApi = {
  itemApi: () => api.get("search/?offset=0&limit=10"),
};

//api.get("items?offset=0&limit=10",<>)  <>안에 {header} 들어가도 됨
