import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn, getUserInitials } from '@/libs/utils';
import { useGetUser } from '@/hooks/user';

interface UserAvatarProps {
  className?: string;
  image?: File | null;
}

const UserAvatar = ({ className, image }: UserAvatarProps) => {
  const [avatar, setAvatar] = useState('');
  const { data } = useGetUser();

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setAvatar(url);
    }
  }, [image]);

  return (
    <Avatar className={cn('h-[56px] w-[56px]', className)}>
      {data && (
        <>
          <AvatarImage
            src={(avatar || data.imageUrl) as string}
            className={'object-cover'}
          />
          <AvatarFallback>
            {getUserInitials(data.firstname, data.lastname)}
          </AvatarFallback>
        </>
      )}
    </Avatar>
  );
};

export default UserAvatar;
