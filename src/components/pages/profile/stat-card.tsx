import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const statCardVariant = cva('flex flex-col w-full', {
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
  value: string;
  numberColor?: 'text-success';
}

const StatCard = ({
  title,
  variant,
  value,
  info,
  numberColor,
}: StatCardProps) => {
  return (
    <Card
      className={cn(
        statCardVariant({
          variant,
        })
      )}
    >
      <CardHeader className={'mb-[42px] pb-0'}>
        <h1 className={'text-xl font-bold leading-6'}>{title}</h1>
        {info && <p className={'font-light'}>{info}</p>}
      </CardHeader>
      <CardContent className={'flex flex-grow'}>
        <div className={cn('text-7.5xl mt-auto font-bold', numberColor)}>
          {value}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
