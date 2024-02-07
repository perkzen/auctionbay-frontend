'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface URLQueryParams {
  tab?: 'auctions' | 'profile';
}

export const useQueryParams = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const query = new URLSearchParams(searchParams);

  const updateQueryParams = (params: URLQueryParams) => {
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        query.set(key, value);
      } else {
        query.delete(key);
      }
    });

    push(`${pathname}?${query.toString()}`);
  };

  const deleteQueryParams = (name: string) => {
    query.delete(name);

    push(`?${query.toString()}`);
  };

  const parseQueryParams = () => {
    return {
      tab: query.get('tab'),
    };
  };

  return {
    updateQueryParams,
    deleteQueryParams,
    urlQuery: parseQueryParams(),
  };
};
