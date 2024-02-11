import { z } from 'zod';

export const ProfileSettingsValidator = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().email(),
});

export type ProfileSettingsData = z.infer<typeof ProfileSettingsValidator>;
