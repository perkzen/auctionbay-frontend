import { BidStatus, getBidStatusText } from '@/libs/types/bid';
import StatusTag, { StatusVariants } from '@/components/ui/status-tag';

interface BidStatusTagProps extends Omit<StatusVariants, 'variant'> {
  status: BidStatus;
  className?: string;
}

const variantOptions: Record<BidStatus, StatusVariants> = {
  [BidStatus.OUTBID]: { variant: 'danger' },
  [BidStatus.WINNING]: { variant: 'success' },
  [BidStatus.WON]: { variant: 'success' },
};

const BidStatusTag = ({ status, className, ...props }: BidStatusTagProps) => {
  const { variant } = variantOptions[status];

  return (
    <StatusTag
      status={getBidStatusText(status)}
      className={className}
      variant={variant}
      {...props}
    />
  );
};

export default BidStatusTag;
