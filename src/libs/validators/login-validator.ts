import { z } from 'zod';

export const LoginValidator = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginData = z.infer<typeof LoginValidator>;
