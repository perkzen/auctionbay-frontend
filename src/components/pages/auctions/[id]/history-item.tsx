import Image from 'next/image';
import { format } from 'date-fns';
import Eur from '@/assets/icons/Eur.svg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getUserInitials } from '@/libs/utils';

interface HistoryRowProps {
  firstname: string;
  lastname: string;
  imageUrl: string | null;
  createdAt: string;
  amount: number;
}

const HistoryItem = ({
  firstname,
  lastname,
  imageUrl,
  createdAt,
  amount,
}: HistoryRowProps) => {
  const username = `${firstname} ${lastname}`;

  return (
    <>
      <li className={'flex flex-row'}>
        <div className={'flex flex-row items-center space-x-4'}>
          <Avatar>
            <AvatarImage src={imageUrl as string} className={'rounded-full'} />
            <AvatarFallback>{getUserInitials(firstname, lastname)}</AvatarFallback>
          </Avatar>
          <span className={'font-light'}>{username}</span>
        </div>
        <div className={'ml-auto space-x-8'}>
          <span>{format(new Date(createdAt), 'HH:mm d.M.yyyy')}</span>
          <div
            className={
              'inline-flex items-center gap-2 rounded-2xl bg-primary-100 px-4 py-[6px]'
            }
          >
            <span className={'font-semibold'}>{amount}</span>
            <Image src={Eur} alt={'eur'} height={20} width={20} />
          </div>
        </div>
      </li>
      <div className={'my-2 border-b border-tertiary-100'} />
    </>
  );
};

export default HistoryItem;
