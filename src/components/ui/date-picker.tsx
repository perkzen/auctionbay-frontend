import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/libs/utils';
import TimeIcon from '@/assets/icons/Time.svg';
import TimeGrayIcon from '@/assets/icons/Time-grey.svg';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import * as React from 'react';

interface DatePickerProps {
  label?: string;
  setDate: (date?: Date) => void;
  date?: Date;
  error?: string;
}

export const DatePicker = ({
  label,
  error,
  date,
  setDate,
}: DatePickerProps) => {
  const errorClass = error
    ? 'border-red-500 focus:border-red-500 focus-visible:border-red-500'
    : '';

  return (
    <div className={'flex w-full flex-col'}>
      {label && <Label>{label}</Label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-medium',
              !date && 'text-muted-foreground',
              error && errorClass
            )}
          >
            {date ? (
              format(date, 'dd.MM.yyyy')
            ) : (
              <span className={'font-light'}>dd.mm.yyyy</span>
            )}
            <Image
              src={date ? TimeIcon : TimeGrayIcon}
              className="ml-auto"
              width={16}
              height={16}
              alt={'Date'}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            disabled={[{ before: new Date() }]}
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {error && (
        <small className={'text-sm font-light text-red-500'}>{error}</small>
      )}
    </div>
  );
};
