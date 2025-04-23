import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

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
        Authorization: `Bearer ${cookie.get('erba-auth')}`,
    },
    withCredentials: true,
};

export const client = axios.create(options);
export const api = axios.create(optionsWithToken);
