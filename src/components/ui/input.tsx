import * as React from 'react';
import { cn } from '@/libs/utils';
import { forwardRef } from 'react';
import { Label } from '@/components/ui/label';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    const errorClass = props.error
      ? 'border-red-500 focus:border-red-500 focus-visible:border-red-500'
      : '';

    return (
      <div className={'flex flex-col'}>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <input
          type={type}
          className={cn(
            'placeholder:text-tertiary-200 flex h-10 w-full rounded-2xl border border-tertiary-200 bg-white px-4 py-2 font-medium placeholder:font-light placeholder:text-tertiary  focus-visible:border-primary-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            errorClass,
            className
          )}
          ref={ref}
          {...props}
        />
        {props.error && (
          <small className={'text-sm font-light text-red-500'}>
            {props.error}
          </small>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
