import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Input } from '@/components/ui/input';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const fileUploadVariant = cva(
  'cursor-pointer px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-2xl transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        outline:
          'border border-secondary-100 bg-white hover:bg-secondary-100 hover:text-white',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

interface FileUploadProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof fileUploadVariant> {
  label: string;
  accept: string;
  className?: string;
  error?: string;
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ variant, className, accept, label, ...props }, ref) => {
    return (
      <label
        htmlFor={'upload-file'}
        className={cn(fileUploadVariant({ variant, className }))}
      >
        <Input
          {...props}
          type="file"
          accept={accept}
          id={'upload-file'}
          className={'hidden'}
          ref={ref}
        />
        <span>{label}</span>
      </label>
    );
  }
);

FileUpload.displayName = 'FileUpload';

export default FileUpload;
