'use client';
import { z } from 'zod';

const numberString = () =>
  z
    .string()
    .min(1)
    .max(10)
    .regex(/^\d+(\.\d{1,2})?$/);

export const CreateAuctionValidator = z.object({
  image: z.any(),
  title: z.string().min(2),
  description: z.string().min(2),
  startingPrice: numberString(),
  endDate: z.date(),
});

export type CreateAuctionData = z.infer<typeof CreateAuctionValidator>;
