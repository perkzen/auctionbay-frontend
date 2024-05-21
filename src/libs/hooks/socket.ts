'use client';
import { ManagerOptions, SocketOptions, io, Socket } from 'socket.io-client';
import { env } from '@/env.mjs';
import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import {
  SocketEmitEvents,
  SocketListenEvents,
  SocketNamespace,
} from '@/libs/types/socket-io';

const socketOptions: Partial<ManagerOptions & SocketOptions> = {
  reconnectionDelay: 1000,
  reconnectionAttempts: 3,
  autoConnect: false,
  reconnection: true,
};

type UseSocketOptions = {
  namespace?: SocketNamespace;
};

export const useSocket = (opts?: UseSocketOptions) => {
  const { data: session } = useSession();
  const accessToken = session?.user?.accessToken;
  const socketRef = useRef<Socket<SocketListenEvents, SocketEmitEvents>>();

  let url = opts?.namespace
    ? env.NEXT_PUBLIC_BACKEND_URL + opts.namespace
    : env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const socket: Socket<SocketListenEvents, SocketEmitEvents> = io(url, {
      ...socketOptions,
      extraHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    socketRef.current = socket;
    socket.connect();

    socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });

    return () => {
      socket.disconnect();
    };
  }, [accessToken, url]);

  return {
    socket: socketRef.current,
  };
};
