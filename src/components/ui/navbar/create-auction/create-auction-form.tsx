'use client';
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import ImageUpload from '@/components/ui/image-upload';
import { Input } from '@/components/ui/input';

interface CreateAuctionFormData {
  image: FileList | null;
  title: string;
  description: string;
}

const CreateAuctionForm = () => {
  const { register, watch, resetField } = useForm<CreateAuctionFormData>({
    defaultValues: {
      image: null,
    },
  });

  const image = watch('image')?.item(0);

  const imageUrl = image ? URL.createObjectURL(image) : '';

  const handleRemoveImage = () => {
    resetField('image');
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Add auction</DialogTitle>
      </DialogHeader>
      <form className={'flex flex-col gap-4'} id={'create-auction'}>
        <ImageUpload
          {...register('image')}
          imageUrl={imageUrl}
          onRemove={handleRemoveImage}
        />
        <Input
          label={'Title'}
          {...register('title')}
          placeholder={'Write item name here'}
        />
      </form>
      <DialogFooter className={'mt-4'}>
        <DialogClose asChild>
          <Button variant={'tertiary'}>Cancel</Button>
        </DialogClose>
        <Button form={'create-auction'} type={'submit'}>
          Save changes
        </Button>
      </DialogFooter>
    </>
  );
};

export default CreateAuctionForm;