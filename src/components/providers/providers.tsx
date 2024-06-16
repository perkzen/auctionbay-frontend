'use client';
import React, { ReactNode, useState } from 'react';
import { Toaster as ToastProvider } from 'sonner';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NotificationProvider from '@/components/providers/notification-provider';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <ProgressBar
            height="4px"
            color="#F4FF47"
            shallowRouting
            options={{ showSpinner: false }}
          />
          {children}
          <ToastProvider position={'bottom-right'} richColors />
        </NotificationProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
