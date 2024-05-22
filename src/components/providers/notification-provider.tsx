'use client';
import { ReactNode, useEffect } from 'react';
import { useSocket } from '@/libs/hooks/socket';
import { SocketEvent, SocketNamespace } from '@/libs/types/socket-io';
import { toast } from 'sonner';

type NotificationProviderProps = {
  children: ReactNode;
};

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const socket = useSocket({
    namespace: SocketNamespace.LIVE_NOTIFICATIONS,
  });

  useEffect(() => {
    if (socket) {
      console.log('Connected to notifications namespace');
      socket.on(SocketEvent.NEW_NOTIFICATION, (notification) => {
        toast.success(
          `Congratulations you won the auction for ${notification.data.message}! `
        );
      });
    }

    return () => {
      if (socket) {
        socket.off(SocketEvent.NEW_NOTIFICATION);
      }
    };
  }, [socket]);

  return <>{children}</>;
};

export default NotificationProvider;
