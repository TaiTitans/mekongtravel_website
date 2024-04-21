import axios from "axios"
const api = axios.create({
    baseURL: 'http://localhost:2323',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export default api;