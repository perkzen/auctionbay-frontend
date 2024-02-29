import { BidStatus, getBidStatusText } from '@/libs/types/bid';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const statusVariants = cva('bg-secondary-100 text-white', {
  variants: {
    variant: {
      OUTBID: 'bg-danger text-primary',
      IN_PROGRESS: 'bg-warning text-primary',
      WINNING: 'bg-success text-primary',
      WON: 'bg-success text-primary',
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

interface BidStatusTagProps extends VariantProps<typeof statusVariants> {
  status: BidStatus;
  className?: string;
}

const BidStatusTag = ({ status, className, size, variant }: BidStatusTagProps) => {
  return (
    <div
      className={cn(
        statusVariants({
          size,
          className,
          variant: variant || status,
        })
      )}
    >
      {getBidStatusText(status)}
    </div>
  );
};

export default BidStatusTag;
