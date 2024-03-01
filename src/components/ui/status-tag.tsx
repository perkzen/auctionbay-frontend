import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const statusVariants = cva('', {
  variants: {
    variant: {
      danger: 'bg-danger text-primary',
      success: 'bg-success text-primary',
      warning: 'bg-warning text-primary',
      default: 'bg-secondary-100 text-white',
    },
    size: {
      sm: 'text-[10px] leading-[12px] px-1 py-0.5 font-light rounded-lg',
      default: 'px-2 py-1 font-light rounded-2xl',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});

export type StatusVariants = VariantProps<typeof statusVariants>;

interface StatusTagProps extends StatusVariants {
  status: string;
  className?: string;
}

const StatusTag = ({ status, className, size, variant }: StatusTagProps) => {
  return (
    <div
      className={cn(
        statusVariants({
          size,
          variant,
          className,
        })
      )}
    >
      {status}
    </div>
  );
};

export default StatusTag;
