import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import FileUpload from '@/components/ui/file-upload';
import { Button } from '@/components/ui/button';
import UserAvatar from '@/components/compositions/navbar/user-avatar';
import { useForm } from 'react-hook-form';
import { USER_KEY, useUpdateProfilePicture } from '@/libs/hooks/user';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateProfilePictureValidator } from '@/libs/validators/update-profile-picture-validator';

interface ChangeProfilePictureFormData {
  fileList: FileList;
}

const ChangeProfilePictureForm = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useUpdateProfilePicture({
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [USER_KEY] });
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { dirtyFields, errors },
  } = useForm<ChangeProfilePictureFormData>({
    defaultValues: { fileList: undefined },
    resolver: zodResolver(UpdateProfilePictureValidator),
  });

  const showErrorMessage = () => {
    if (errors.fileList?.message) {
      toast.error(errors.fileList.message, {
        duration: 5000,
      });
    }
  };

  const onSubmit = (data: ChangeProfilePictureFormData) => {
    const image = data.fileList.item(0);
    if (!image) return;

    toast.promise(mutateAsync(image), {
      loading: 'Updating profile picture...',
      success: 'Profile picture updated!',
      error: 'Failed to update profile picture',
    });
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Change profile picture</DialogTitle>
      </DialogHeader>
      <form
        className={'mt-4 flex flex-col items-center gap-4'}
        onSubmit={handleSubmit(onSubmit)}
        id={'change-profile-picture'}
      >
        <UserAvatar image={watch('fileList')?.item(0)} />
        <FileUpload
          {...register('fileList')}
          accept={'image/*'}
          label={'Upload new picture'}
        />
      </form>
      <DialogFooter className={'mt-4 flex flex-row justify-end'}>
        <DialogClose asChild>
          <Button variant={'tertiary'}>Cancel</Button>
        </DialogClose>
        <Button
          form={'change-profile-picture'}
          type={'submit'}
          disabled={!dirtyFields.fileList || isPending}
          onClick={showErrorMessage}
        >
          Save changes
        </Button>
      </DialogFooter>
    </>
  );
};
export default ChangeProfilePictureForm;
