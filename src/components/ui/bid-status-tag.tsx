import React from 'react';
import { BidStatus, getBidStatusText } from '@/models/bid';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const statusVariants = cva('', {
  variants: {
    variant: {
      outbid: 'bg-danger',
      in_progress: 'bg-warning',
      winning: 'bg-success',
      done: 'bg-secondary-100 text-white',
    },
    size: {
      sm: 'text-[10px] leading-[12px] px-1 py-0.5 font-light rounded-lg',
      default: 'px-2 py-1 font-light rounded-2xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface BidStatusTagProps
  extends Omit<VariantProps<typeof statusVariants>, 'variant'> {
  status: BidStatus;
  className?: string;
}

const BidStatusTag = ({ status, className, size }: BidStatusTagProps) => {
  return (
    <div
      className={cn(
        statusVariants({
          size,
          className,
          variant: status,
        })
      )}
    >
      {getBidStatusText(status)}
    </div>
  );
};

export default BidStatusTag;
