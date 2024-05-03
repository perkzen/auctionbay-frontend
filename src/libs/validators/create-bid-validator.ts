import { z } from 'zod';
import { numberString } from '@/libs/validators/common';

export const CreateBidValidator = z.object({
  amount: numberString(),
  auctionId: z.string(),
});

export type CreateBidData = z.infer<typeof CreateBidValidator>;
