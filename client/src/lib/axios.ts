import axios from 'axios';

const options = {
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

const optionsWithToken = {
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    withCredentials: true,
};

export const client = axios.create(options);
export const api = axios.create(optionsWithToken);
