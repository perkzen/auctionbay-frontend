import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserInitials = (firstname: string, lastname: string) => {
  return `${firstname.charAt(0)}${lastname.charAt(0)}`;
};

export const formatTimeLeft = (endsAt: string) => {
  const currentTime = new Date();
  const endDate = new Date(endsAt);

  const daysLeft = differenceInDays(endDate, currentTime);
  if (daysLeft > 0) {
    return `${daysLeft}day${daysLeft > 1 ? 's' : ''}`;
  }

  const hoursLeft = differenceInHours(endDate, currentTime);
  if (hoursLeft > 0) {
    return `${hoursLeft}h`;
  }

  const minutesLeft = differenceInMinutes(endDate, currentTime);
  return `${minutesLeft}m`;
};
