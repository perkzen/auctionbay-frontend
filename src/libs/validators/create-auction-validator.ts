'use client';
import { z } from 'zod';

const numberString = () => z.string().regex(/^[0-9]+$/, 'Must be a number');

export const CreateAuctionValidator = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  startingPrice: numberString(),
  endDate: z.date(),
  fileList: z.custom<FileList>().refine((data) => data.length > 0, {
    message: 'Image is required',
  }),
});

export type CreateAuctionData = z.infer<typeof CreateAuctionValidator>;
