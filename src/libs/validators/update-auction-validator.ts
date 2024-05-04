'use client';
import { z } from 'zod';

export const UpdateAuctionValidator = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  endDate: z.date(),
  fileList: z.custom<FileList>(), // not required
});

export type UpdateAuctionData = z.infer<typeof UpdateAuctionValidator>;
