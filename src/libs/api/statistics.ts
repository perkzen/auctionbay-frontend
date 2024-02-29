import { AxiosResponse } from 'axios';
import { api } from '@/libs/api/axios';
import { Endpoint } from '@/libs/api/endpoints';

export const getUserEarnings = async () => {
  const res = (await api.get(`${Endpoint.STATISTICS}/me/earnings`)) as AxiosResponse<{
    earnings: number;
  }>;

  return res.data.earnings;
};

export const getUserPostedAuctions = async () => {
  const res = (await api.get(
    `${Endpoint.STATISTICS}/me/posted-auctions`
  )) as AxiosResponse<{
    postedAuctions: number;
  }>;

  return res.data.postedAuctions;
};

export const getUserActiveBids = async () => {
  const res = (await api.get(`${Endpoint.STATISTICS}/me/active-bids`)) as AxiosResponse<{
    activeBids: number;
  }>;

  return res.data.activeBids;
};

export const getUserWinningBids = async () => {
  const res = (await api.get(`${Endpoint.STATISTICS}/me/winning-bids`)) as AxiosResponse<{
    winningBids: number;
  }>;

  return res.data.winningBids;
};
