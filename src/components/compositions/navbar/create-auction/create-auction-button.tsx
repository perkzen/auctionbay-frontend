'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import AddIcon from '@/assets/icons/Add.svg';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CreateAuctionForm from '@/components/compositions/navbar/create-auction/create-auction-form';

const CreateAuctionButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'fit'} className={'rounded-5xl p-2 sm:p-4'}>
          <Image src={AddIcon} alt={'Add'} width={24} height={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className={'max-w-[328px] sm:max-w-[533px]'}>
        <CreateAuctionForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateAuctionButton;
