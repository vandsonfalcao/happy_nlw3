import axios from "axios";

const url = '192.168.0.104'
const api = axios.create({
    baseURL: `http://${url}:3333` 
});

export default api;