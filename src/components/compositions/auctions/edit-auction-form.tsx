import React, { useRef } from 'react';
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ImageUpload from '@/components/ui/image-upload';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  UpdateAuctionData,
  UpdateAuctionValidator,
} from '@/libs/validators/update-auction-validator';
import { DatePicker } from '@/components/ui/date-picker';
import { Button } from '@/components/ui/button';
import { AUCTION_KEY, USER_AUCTIONS_KEY, useUpdateAuction } from '@/libs/hooks/auction';
import { Auction } from '@/libs/types/auction';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

interface EditAuctionFormProps {
  auction: Auction;
}

const EditAuctionForm = ({ auction }: EditAuctionFormProps) => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    resetField,
    formState: { errors },
  } = useForm<UpdateAuctionData>({
    defaultValues: {
      endDate: new Date(auction.endsAt),
      title: auction.title,
      fileList: undefined,
      description: auction.description,
    },
    resolver: zodResolver(UpdateAuctionValidator),
  });

  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const queryClient = useQueryClient();

  const { mutateAsync } = useUpdateAuction(auction.id, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [USER_AUCTIONS_KEY],
      });

      await queryClient.invalidateQueries({
        queryKey: [AUCTION_KEY, auction.id],
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

  const onSubmit = handleSubmit(async (data) => {
    toast.promise(mutateAsync(data), {
      loading: 'Updating auction...',
      success: 'Auction updated successfully',
      error: 'Failed to update auction',
    });
  });

  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit auction</DialogTitle>
      </DialogHeader>
      <form className={'flex flex-col gap-4'} id={'update-auction'} onSubmit={onSubmit}>
        <ImageUpload
          {...register('fileList')}
          image={image}
          url={auction.imageUrl}
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
        <DatePicker
          label={'End date'}
          date={watch('endDate')}
          setDate={setEndDate}
          error={errors.endDate?.message}
        />
      </form>
      <DialogFooter className={'mt-4 flex flex-row justify-end'}>
        <DialogClose asChild>
          <Button variant={'tertiary'} ref={closeBtnRef}>
            Discard changes
          </Button>
        </DialogClose>
        <Button form={'update-auction'} variant={'secondary'}>
          Edit auction
        </Button>
      </DialogFooter>
    </>
  );
};

export default EditAuctionForm;
