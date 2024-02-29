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
import {
  CreateAuctionData,
  CreateAuctionValidator,
} from '@/libs/validators/create-auction-validator';
import { AUCTION_LIST_KEY, useCreateAuction } from '@/libs/hooks/auction';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

const defaultValues: Partial<CreateAuctionData> = {
  fileList: undefined,
  title: '',
  description: '',
  startingPrice: '',
  endDate: undefined,
};

const CreateAuctionForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    resetField,
    formState: { errors },
  } = useForm<CreateAuctionData>({
    defaultValues,
    resolver: zodResolver(CreateAuctionValidator),
  });

  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const queryClient = useQueryClient();

  const { mutateAsync } = useCreateAuction({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [AUCTION_LIST_KEY],
      });

      closeBtnRef.current?.click();
    },
  });

  const image = watch('fileList')?.item(0);

  const handleRemoveImage = () => {
    resetField('fileList');
  };

  const setEndDate = (date?: Date) => {
    if (!date) return;
    setValue('endDate', date);
  };

  const onSubmit = (data: CreateAuctionData) => {
    toast.promise(mutateAsync(data), {
      loading: 'Creating auction...',
      success: 'Auction created!',
      error: 'Failed to create auction',
    });
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
          {...register('fileList')}
          image={image}
          onRemove={handleRemoveImage}
          error={errors.fileList?.message}
        />
        <Input
          label={'Title'}
          {...register('title')}
          placeholder={'Write item name here'}
          id={'title'}
          error={errors.title?.message}
        />
        <Textarea
          label={'Description'}
          {...register('description')}
          placeholder={'Write item description here'}
          id={'description'}
          className={'h-[123px] resize-none'}
          error={errors.description?.message}
        />
        <div className={'grid grid-cols-2 gap-4'}>
          <Input
            label={'Starting price'}
            type={'number'}
            {...register('startingPrice')}
            placeholder={'Price'}
            id={'startingPrice'}
            error={errors.startingPrice?.message}
            trailingIcon={<Image src={EuroIcon} alt={'Euro'} width={16} height={16} />}
          />
          <DatePicker
            label={'End date'}
            date={watch('endDate')}
            setDate={setEndDate}
            error={errors.endDate?.message}
          />
        </div>
      </form>
      <DialogFooter className={'mt-4'}>
        <DialogClose asChild>
          <Button ref={closeBtnRef} variant={'tertiary'}>
            Cancel
          </Button>
        </DialogClose>
        <Button form={'create-auction'}>Save changes</Button>
      </DialogFooter>
    </>
  );
};

export default CreateAuctionForm;
