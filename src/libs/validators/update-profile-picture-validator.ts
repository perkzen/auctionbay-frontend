'use client';
import { z } from 'zod';
import { MAX_FILE_SIZE_BYTES, MAX_FILE_SIZE_MB } from '@/libs/constants';

export const UpdateProfilePictureValidator = z.object({
  fileList: z
    .custom<FileList>()
    .refine((data) => data.length > 0, {
      message: 'Image is required',
    })
    .refine((data) => data[0].size <= MAX_FILE_SIZE_BYTES, {
      message: `Image size must be less than ${MAX_FILE_SIZE_MB}MB`,
    }),
});
