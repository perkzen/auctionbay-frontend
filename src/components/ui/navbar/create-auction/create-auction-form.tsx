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
import { Textarea } from '@/components/ui/textarea';
import EuroIcon from '@/assets/icons/Eur.svg';
import Image from 'next/image';
import { DatePicker } from '@/components/ui/date-picker';

interface CreateAuctionFormData {
  image: FileList | null;
  title: string;
  description: string;
  startingPrice: number;
  endDate: Date;
}

const CreateAuctionForm = () => {
  const { register, watch, handleSubmit, setValue, resetField } =
    useForm<CreateAuctionFormData>({
      defaultValues: {
        image: null,
      },
    });

  const image = watch('image')?.item(0);

  const imageUrl = image ? URL.createObjectURL(image) : '';

  const handleRemoveImage = () => {
    resetField('image');
  };

  const setEndDate = (date?: Date) => {
    if (!date) return;
    setValue('endDate', date);
  };

  const onSubmit = (data: CreateAuctionFormData) => {
    console.log(data);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Add auction</DialogTitle>
      </DialogHeader>
      <form
        className={'flex flex-col gap-4'}
        id={'create-auction'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <ImageUpload
          {...register('image')}
          imageUrl={imageUrl}
          onRemove={handleRemoveImage}
        />
        <Input
          label={'Title'}
          {...register('title')}
          placeholder={'Write item name here'}
          id={'title'}
        />
        <Textarea
          label={'Description'}
          {...register('description')}
          placeholder={'Write item description here'}
          id={'description'}
          className={'h-[123px] resize-none'}
        />
        <div className={'grid grid-cols-2 gap-4'}>
          <Input
            label={'Starting price'}
            type={'number'}
            {...register('startingPrice')}
            placeholder={'Price'}
            id={'startingPrice'}
            trailingIcon={
              <Image src={EuroIcon} alt={'Euro'} width={16} height={16} />
            }
          />
          <DatePicker
            label={'End date'}
            date={watch('endDate')}
            setDate={setEndDate}
          />
        </div>
      </form>
      <DialogFooter className={'mt-4'}>
        <DialogClose asChild>
          <Button variant={'tertiary'}>Cancel</Button>
        </DialogClose>
        <Button form={'create-auction'}>Save changes</Button>
      </DialogFooter>
    </>
  );
};

export default CreateAuctionForm;
