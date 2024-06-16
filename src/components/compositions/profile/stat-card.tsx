import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';
import CountUp from 'react-countup';

const statCardVariant = cva('flex flex-col sm:w-full', {
  variants: {
    variant: {
      dark: 'bg-secondary-100 text-accent',
      light: 'bg-white',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
});

interface StatCardProps extends VariantProps<typeof statCardVariant> {
  title: string;
  info?: string;
  value: number;
  numberColor?: 'text-success';
  unit?: '€';
}

const StatCard = ({ title, variant, value, info, numberColor, unit }: StatCardProps) => {
  return (
    <Card
      className={cn(
        statCardVariant({
          variant,
        })
      )}
    >
      <CardHeader className={'mb-[42px] pb-0'}>
        <h1
          className={
            'break-words text-[18px] font-bold leading-[21.6px] sm:text-xl sm:leading-6'
          }
        >
          {title}
        </h1>
        {info && <p className={'font-light'}>{info}</p>}
      </CardHeader>
      <CardContent className={'flex flex-grow'}>
        <div
          className={cn(
            'mt-auto text-[29px] font-bold leading-[34.8px] sm:text-7.5xl',
            numberColor
          )}
        >
          <CountUp start={0} end={value} suffix={unit} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
