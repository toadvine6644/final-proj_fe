import axios from "axios";

const axiosInstancs = axios.create({
  baseURL:
    import.meta.mode === "development"
      ? "https://final-projbe-production.up.railway.app/api"
      : "/api",
  withCredentials: true,
});

export default axiosInstancs;
