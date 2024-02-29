import { cn } from '@/libs/utils';

const EmptyNotificationList = ({ className }: { className?: string }) => {
  return (
    <div className={cn('font-light text-tertiary', className)}>No notifications.</div>
  );
};

export default EmptyNotificationList;
