import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:9009/api"
});

export default apiClient;
