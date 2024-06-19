'use client';
import { z } from 'zod';
import { numberString } from '@/libs/validators/common';
import { MAX_FILE_SIZE_BYTES, MAX_FILE_SIZE_MB } from '@/libs/constants';

export const CreateAuctionValidator = z.object({
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
  startingPrice: numberString(),
  endDate: z.date(),
  fileList: z
    .custom<FileList>()
    .refine((files) => files.length > 0, {
      message: 'Image is required',
    })
    .refine(
      (files) => Array.from(files).every((file) => file.size <= MAX_FILE_SIZE_BYTES),
      {
        message: `Image size must be less than ${MAX_FILE_SIZE_MB}MB`,
      }
    ),
});

export type CreateAuctionData = z.infer<typeof CreateAuctionValidator>;
