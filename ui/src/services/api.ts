import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:1969/api"
});

export default apiClient;
