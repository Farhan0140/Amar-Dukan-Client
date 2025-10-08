
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://amar-dukan.vercel.app",
});

export default apiClient;