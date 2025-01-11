import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const client = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});
