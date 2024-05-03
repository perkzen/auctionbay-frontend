import { z } from 'zod';
import { numberString } from '@/libs/validators/common';

export const CreateAutoBidValidator = z.object({
  maxAmount: numberString(),
  incrementAmount: numberString(),
  auctionId: z.string(),
});

export type CreateAutoBidData = z.infer<typeof CreateAutoBidValidator>;
