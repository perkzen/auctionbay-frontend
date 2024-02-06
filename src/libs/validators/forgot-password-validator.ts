import { z } from 'zod';

export const ForgotPasswordValidator = z.object({
  email: z.string().email(),
});

export type ForgotPasswordData = z.infer<typeof ForgotPasswordValidator>;
