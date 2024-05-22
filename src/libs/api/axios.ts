import axios from 'axios';
import { env } from '@/env.mjs';
import { getSession } from 'next-auth/react';

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  timeoutErrorMessage: 'Request timed out',
});

api.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session) {
    config.headers.Authorization = `Bearer ${session.user.accessToken}`;
  }

  return config;
});
