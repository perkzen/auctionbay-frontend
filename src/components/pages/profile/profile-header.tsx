'use client';
import { useGetUser } from '@/hooks/user';

const ProfileHeader = () => {
  const { data } = useGetUser();

  return (
    <h1 className={'mb-4 text-3.5xl font-bold'}>
      Hello {data?.firstname} {data?.lastname}
    </h1>
  );
};

export default ProfileHeader;
