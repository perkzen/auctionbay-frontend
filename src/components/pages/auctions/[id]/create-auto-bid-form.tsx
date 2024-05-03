import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const CreateAutoBidForm = () => {
  return (
    <form className={'flex flex-row items-center justify-end gap-4'}>
      <div>Bid increment:</div>
      <Input type={'number'} className={'w-[83px]'} />
      <div>Max price:</div>
      <Input type={'number'} className={'w-[83px]'} />
      <Button>Auto bid</Button>
    </form>
  );
};

export default CreateAutoBidForm;
