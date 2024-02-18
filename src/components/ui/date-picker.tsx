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

interface DatePickerProps {
  label?: string;
  setDate: (date?: Date) => void;
  date?: Date;
}

export const DatePicker = ({ label, date, setDate }: DatePickerProps) => {
  return (
    <div className={'flex w-full flex-col'}>
      {label && <Label>{label}</Label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-medium',
              !date && 'text-muted-foreground'
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
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
