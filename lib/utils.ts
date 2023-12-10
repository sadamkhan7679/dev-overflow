import qs from 'query-string';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type {
  UrlQueryParams,
  RemoveUrlQueryParams,
  BadgeParams,
  BadgeCounts,
  FilterProps,
} from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams): string => {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

export const removeKeysFromQuery = ({ params, keysToRemove }: RemoveUrlQueryParams): string => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach(key => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};
