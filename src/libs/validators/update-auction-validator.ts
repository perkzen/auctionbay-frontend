'use client';
import { z } from 'zod';
import { MAX_FILE_SIZE_BYTES, MAX_FILE_SIZE_MB } from '@/libs/constants';

export const UpdateAuctionValidator = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  endDate: z.date(),
  fileList: z.custom<FileList>().refine((data) => data[0].size <= MAX_FILE_SIZE_BYTES, {
    message: `Image size must be less than ${MAX_FILE_SIZE_MB}MB`,
  }),
});

export type UpdateAuctionData = z.infer<typeof UpdateAuctionValidator>;
