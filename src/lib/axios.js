import axios from "axios";

const axiosInstancs = axios.create({
  baseURL: "https://final-projbe-production.up.railway.app/api",
  withCredentials: true,
});

export default axiosInstancs;
