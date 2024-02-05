import * as React from 'react';
import { cn } from '@/libs/utils';
import { forwardRef } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const errorClass = props.error
      ? 'border-red-500 focus:border-red-500 focus-visible:border-red-500'
      : '';

    return (
      <>
        <input
          type={type}
          className={cn(
            'placeholder:text-tertiary flex h-10 w-full rounded-2xl border border-tertiary-200 bg-white px-4 py-2 font-medium placeholder:font-light placeholder:text-tertiary-200  focus-visible:border-primary-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
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
      </>
    );
  }
);
Input.displayName = 'Input';

export { Input };
