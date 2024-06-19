'use client';
import { z } from 'zod';
import { MAX_FILE_SIZE_BYTES, MAX_FILE_SIZE_MB } from '@/libs/constants';

export const UpdateAuctionValidator = z
  .object({
    title: z
      .string()
      .min(2, {
        message: 'Title must be at least 2 characters',
      })
      .max(100, {
        message: 'Title must be less than 100 characters',
      }),
    description: z
      .string()
      .min(2, {
        message: 'Description must be at least 2 characters',
      })
      .max(1000, {
        message: 'Description must be less than 1000 characters',
      }),
    endDate: z.date(),
    fileList: z
      .custom<FileList>()
      .optional()
      .refine(
        (files) =>
          files == null ||
          Array.from(files).every((file) => file.size <= MAX_FILE_SIZE_BYTES),
        {
          message: `Image size must be less than ${MAX_FILE_SIZE_MB}MB`,
        }
      ),
    auctionHasImageUrl: z.boolean(),
  })
  .refine(
    (data) => {
      const isFile = Boolean(data.fileList && data.fileList.length > 0);
      console.log(data.auctionHasImageUrl, isFile);
      return data.auctionHasImageUrl || isFile;
    },
    {
      message: 'Image is required',
      path: ['fileList'],
    }
  );

export type UpdateAuctionData = z.infer<typeof UpdateAuctionValidator>;
