import axios from 'axios';

export const http = axios.create({
  baseURL: `${process.env.SERVER_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});
