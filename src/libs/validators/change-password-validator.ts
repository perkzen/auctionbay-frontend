import { z } from 'zod';
import { strongPassword } from '@/libs/validators/signup-validator';

export const ChangePasswordValidator = z
  .object({
    currentPassword: z.string().min(8),
    newPassword: strongPassword(),
    repeatPassword: z.string().min(8),
  })
  .refine((data) => data.newPassword === data.repeatPassword, {
    message: 'Password does not match',
    path: ['repeatPassword'],
  });

export type ChangePasswordData = z.infer<typeof ChangePasswordValidator>;
