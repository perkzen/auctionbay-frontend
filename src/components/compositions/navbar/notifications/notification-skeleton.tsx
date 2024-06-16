import { Skeleton } from '@/components/ui/skeleton';

import React from 'react';

const NotificationSkeleton = () => {
  return (
    <div className={'flex flex-row'}>
      <Skeleton className={'h-[40px] w-[40px] rounded'} />
      <div className={'my-[2px] ml-2 flex flex-col gap-1'}>
        <Skeleton className={'h-4 w-32 rounded'} />
        <Skeleton className={'h-4 w-16 rounded'} />
      </div>
      <div className={'ml-auto flex flex-row items-center gap-2'}>
        <Skeleton className={'h-[28px] w-[48px] rounded-full'} />
        <Skeleton className={'h-[28px] w-[48px] rounded-full'} />
      </div>
    </div>
  );
};

export default NotificationSkeleton;
