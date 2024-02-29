'use client';
import React, {
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import FileUpload from '@/components/ui/file-upload';
import { cn } from '@/libs/utils';
import { Button } from '@/components/ui/button';
import TrashIcon from '@/assets/icons/Delete.svg';
import Image from 'next/image';

interface ImageUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  onRemove: () => void;
  image: File | null;
  error?: string;
}

const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>(
  ({ image, onRemove, error, ...props }, ref) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
      if (!image) return;

      const url = URL.createObjectURL(image);
      setImageUrl(url);

      return () => {
        if (url && image) {
          URL.revokeObjectURL(url);
        }
      };
    }, [image]);

    const errorClass = error
      ? 'border border-red-500 focus:border-red-500 focus-visible:border-red-500'
      : '';

    return (
      <div>
        <div
          className={cn(
            'relative flex h-[168px] w-full flex-col rounded-2xl bg-base',
            error && errorClass
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
        {error && <small className={'text-sm font-light text-red-500'}>{error}</small>}
      </div>
    );
  }
);

ImageUpload.displayName = 'ImageUpload';

export default ImageUpload;
