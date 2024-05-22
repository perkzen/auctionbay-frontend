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

type CreateAutoBidFormProps = {
  disabled?: boolean;
};

const CreateAutoBidForm = ({ disabled }: CreateAutoBidFormProps) => {
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
    <form
      className={'flex w-full flex-col justify-end gap-4 sm:flex-row sm:items-center'}
      onSubmit={onSubmit}
    >
      <div className={'flex flex-row items-center gap-2'}>
        <label className={'flex-shrink-0'}>Bid increment:</label>
        <Input
          {...register('incrementAmount')}
          type={'number'}
          className={'w-full sm:w-[83px]'}
        />
      </div>

      <div className={'flex flex-row items-center gap-2'}>
        <label className={''}>Max price:</label>
        <Input
          {...register('maxAmount')}
          type={'number'}
          className={'w-fit sm:w-[83px]'}
        />
      </div>
      <Button className={'w-fit self-end'} disabled={disabled}>
        Auto bid
      </Button>
    </form>
  );
};

export default CreateAutoBidForm;
