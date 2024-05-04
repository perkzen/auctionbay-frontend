import { z } from 'zod';

export const numberString = () => z.string().regex(/^[0-9]+$/, 'Must be a number');
