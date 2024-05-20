import { AuctionStatus, getAuctionStatusText } from '@/libs/types/auction';
import StatusTag, { StatusVariants } from '@/components/ui/status-tag';

interface AuctionStatusProps extends Omit<StatusVariants, 'variant'> {
  status: AuctionStatus;
  className?: string;
}

const variantOptions: Record<AuctionStatus, StatusVariants> = {
  [AuctionStatus.ACTIVE]: { variant: 'warning' },
  [AuctionStatus.CLOSED]: { variant: 'default' },
};

const AuctionStatusTag = ({ status, className, ...props }: AuctionStatusProps) => {
  const { variant } = variantOptions[status];

  return (
    <StatusTag
      status={getAuctionStatusText(status)}
      className={className}
      variant={variant}
      {...props}
    />
  );
};

export default AuctionStatusTag;
