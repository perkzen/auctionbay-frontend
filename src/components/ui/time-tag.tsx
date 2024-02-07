import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';
import TimeIcon from '@/assets/icons/Time.svg';
import Image from 'next/image';

const timeTagVariants = cva('flex flex-row gap-1 items-center', {
  variants: {
    variant: {
      closing: 'bg-danger',
    },
    size: {
      sm: 'text-[10px] leading-[12px] px-1 py-0.5 font-light rounded-lg',
      default: 'px-2 py-1 font-light px-2 py-1 rounded-2xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface TimeTagProps
  extends Omit<VariantProps<typeof timeTagVariants>, 'variant'> {
  endsAt: Date;
  className?: string;
}

const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;
const MILLISECONDS_IN_AN_HOUR = 60 * 60 * 1000;

const TimeTag = ({ size, endsAt, className }: TimeTagProps) => {
  const now = Date.now();
  const timeLeft = endsAt.getTime() - now;
  const variant = timeLeft <= MILLISECONDS_IN_A_DAY ? 'closing' : null;

  const hoursLeft = Math.floor(timeLeft / MILLISECONDS_IN_AN_HOUR);

  return (
    <div
      className={cn(
        timeTagVariants({
          size,
          className,
          variant: variant,
        })
      )}
    >
      <span>{hoursLeft}h</span>
      <Image src={TimeIcon} alt={'Time'} width={12} height={12} />
    </div>
  );
};

export default TimeTag;
