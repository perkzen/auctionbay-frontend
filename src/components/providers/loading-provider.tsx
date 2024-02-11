import React, { PropsWithChildren } from 'react';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { cn } from '@/libs/utils';

const LoadingProvider = ({
  children,
  isLoading,
}: PropsWithChildren & { isLoading: boolean }) => {
  return (
    <div className={'relative'}>
      {isLoading && (
        <LoadingSpinner className={'absolute left-[50%] top-[40%] h-8 w-8'} />
      )}
      <div className={cn(isLoading && 'opacity-10')}>{children}</div>
    </div>
  );
};

export default LoadingProvider;
