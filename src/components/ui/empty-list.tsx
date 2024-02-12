import { cn } from '@/libs/utils';

interface EmptyListProps {
  title: string;
  info: string;
  className?: string;
}

const EmptyList = ({ title, info, className }: EmptyListProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center gap-2',
        className
      )}
    >
      <h1 className={'text-2.5xl font-bold'}>{title}</h1>
      <p className={'max-w-[292px] text-center font-light text-tertiary'}>
        {info}
      </p>
    </div>
  );
};

export default EmptyList;
