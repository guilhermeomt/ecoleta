import axios from 'axios'; 

const api = axios.create({
    baseURL: 'https://basium.serveo.net',
});

export default api;