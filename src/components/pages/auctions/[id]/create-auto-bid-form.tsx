'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import {
  CreateAutoBidData,
  CreateAutoBidValidator,
} from '@/libs/validators/create-autobid-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { BIDDING_HISTORY_KEY, useAutoBid } from '@/libs/hooks/auction';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';

const CreateAutoBidForm = () => {
  const params = useParams();
  const { id } = params;

  const { register, handleSubmit } = useForm<CreateAutoBidData>({
    defaultValues: { maxAmount: '0', incrementAmount: '0', auctionId: id as string },
    resolver: zodResolver(CreateAutoBidValidator),
  });

  const queryClient = useQueryClient();

  const { mutateAsync } = useAutoBid({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [BIDDING_HISTORY_KEY, id],
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    toast.promise(mutateAsync(data), {
      loading: 'Creating auto bid...',
      success: 'Auto bid created!',
      error: (error: AxiosError<{ message: string }>) =>
        `${error.response?.data.message}!` || 'Failed to create auto bid!',
    });
  });

  return (
    <form className={'flex flex-row items-center justify-end gap-4'} onSubmit={onSubmit}>
      <div>Bid increment:</div>
      <Input {...register('incrementAmount')} type={'number'} className={'w-[83px]'} />
      <div>Max price:</div>
      <Input {...register('maxAmount')} type={'number'} className={'w-[83px]'} />
      <Button>Auto bid</Button>
    </form>
  );
};

export default CreateAutoBidForm;
