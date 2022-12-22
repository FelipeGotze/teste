import axios from 'axios';
import { parseCookies } from 'nookies';

const { "auth.token": token } = parseCookies();

export const api = axios.create({
  //baseURL: "https://back-end.icriptomining.com/api",
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content': 'application/ vnd.api+json',
    'Accept': 'application/ vnd.api+json',
    'Authorization': `Bearer ${token}`
  },
});