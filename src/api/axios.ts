import axios from 'axios';
import { env } from '@/env.mjs';

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  // try {
  //   const session = await getSession();
  //   if (session) {
  //     config.headers.Authorization = `Bearer ${session.token}`;
  //   }
  // } catch (e) {
  //   console.error(e);
  // }
  return config;
});
