import * as React from 'react';
import { cn } from '@/libs/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'placeholder:text-tertiary flex h-10 w-full rounded-2xl border border-tertiary-200 bg-white px-4 py-2 font-medium placeholder:font-light placeholder:text-tertiary-200 focus-visible:border-tertiary-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
