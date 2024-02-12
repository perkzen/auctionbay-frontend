import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserInitials = (firstname: string, lastname: string) => {
  return `${firstname.charAt(0)}${lastname.charAt(0)}`;
};
