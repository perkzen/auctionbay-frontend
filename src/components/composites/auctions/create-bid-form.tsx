'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import {
  CreateBidData,
  CreateBidValidator,
} from '@/libs/validators/create-bid-validator';
import { useParams } from 'next/navigation';
import { BIDDING_HISTORY_KEY, useBid } from '@/libs/hooks/auction';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';

const CreateBidForm = () => {
  const params = useParams();
  const { id } = params;

  const { register, handleSubmit } = useForm<CreateBidData>({
    defaultValues: { amount: '0', auctionId: id as string },
    resolver: zodResolver(CreateBidValidator),
  });

  const queryClient = useQueryClient();

  const { mutateAsync } = useBid({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [BIDDING_HISTORY_KEY, id],
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    toast.promise(mutateAsync(data), {
      loading: 'Placing bid...',
      success: 'Bid placed!',
      error: (error: AxiosError<{ message: string }>) =>
        `${error.response?.data.message}!` || 'Failed to place bid!',
    });
  });

  return (
    <form className={'flex flex-row items-center justify-end gap-4'} onSubmit={onSubmit}>
      <div className={'flex flex-row items-center gap-2'}>
        <label>Bid:</label>
        <Input {...register('amount')} type={'number'} className={'w-[83px]'} min={0} />
      </div>
      <Button>Place bid</Button>
    </form>
  );
};

export default CreateBidForm;
