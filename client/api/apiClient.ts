import axios from "axios";

const apiClient = axios.create({
  baseURL: "pp-springboot-backend-production.up.railway.app",
});

export default apiClient;
