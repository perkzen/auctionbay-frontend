import * as React from 'react';

import { cn } from '@/libs/utils';
import { forwardRef } from 'react';
import { Label } from '@/components/ui/label';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, ...props }, ref) => {
    const errorClass = props.error
      ? 'border-red-500 focus:border-red-500 focus-visible:border-red-500'
      : '';

    return (
      <div className={'flex flex-col'}>
        {label && <Label htmlFor={props.id}>{label}</Label>}

        <textarea
          className={cn(
            'w-ful flex min-h-[80px] rounded-2xl border border-tertiary-200 bg-white px-4 py-2 font-medium  ring-offset-white placeholder:font-light placeholder:text-tertiary focus-visible:border-primary-100 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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
Textarea.displayName = 'Textarea';

export { Textarea };
