'use client';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import FileUpload from '@/components/ui/file-upload';
import { cn } from '@/libs/utils';
import { Button } from '@/components/ui/button';
import TrashIcon from '@/assets/icons/Delete.svg';
import Image from 'next/image';

interface ImageUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  onRemove: () => void;
  imageUrl?: string | null;
}

const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>(
  ({ imageUrl, onRemove, ...props }, ref) => {
    return (
      <div
        className={cn(
          'relative flex h-[168px] w-full flex-col  rounded-2xl bg-base'
        )}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {!imageUrl && (
          <FileUpload
            {...props}
            label={'Add image'}
            accept={'image/*'}
            className={'m-auto bg-base'}
            ref={ref}
          />
        )}
        {imageUrl && (
          <Button
            variant={'secondary'}
            size={'icon'}
            className={'ml-auto mr-4 mt-4'}
            type={'button'}
            onClick={onRemove}
          >
            <Image src={TrashIcon} alt={'Delete'} width={24} height={24} />
          </Button>
        )}
      </div>
    );
  }
);

ImageUpload.displayName = 'ImageUpload';

export default ImageUpload;
