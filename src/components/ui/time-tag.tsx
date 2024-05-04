'use client';
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn, formatTimeLeft } from '@/libs/utils';
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

const iconSize = {
  sm: 12,
  default: 20,
};

const getIconSize = (size: keyof typeof iconSize | null | undefined) =>
  size ? iconSize[size] : 20;

interface TimeTagProps extends Omit<VariantProps<typeof timeTagVariants>, 'variant'> {
  endsAt: string;
  className?: string;
}

const TimeTag = ({ size, endsAt, className }: TimeTagProps) => {
  const timeLeft = formatTimeLeft(endsAt);
  const containsHours = timeLeft.includes('h');

  return (
    <div
      className={cn(
        timeTagVariants({
          size,
          className,
          variant: containsHours ? 'closing' : undefined,
        })
      )}
    >
      <span>{timeLeft}</span>
      <Image
        src={TimeIcon}
        alt={'Time'}
        width={getIconSize(size)}
        height={getIconSize(size)}
      />
    </div>
  );
};

export default TimeTag;
