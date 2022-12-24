import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content': 'application/ vnd.api+json',
        'Accept': 'application/ vnd.api+json',
    },
});