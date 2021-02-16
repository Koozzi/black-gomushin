import axios from "axios";

const appApi = axios.create({
  baseURL: "http://13.125.216.179:8000/",
  method: "post",
});

export default appApi;
// export const LoginApi = api.post("login/");
