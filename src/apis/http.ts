import axios from 'axios';

export const http = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});
