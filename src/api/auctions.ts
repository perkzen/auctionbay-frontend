import { Endpoint } from '@/api/endpoints';
import { api } from '@/api/axios';
import { AxiosResponse } from 'axios';
import { Auction } from '@/models/auction';

export const getAuctionList = async () => {
  const res = (await api.get(Endpoint.AUCTIONS)) as AxiosResponse<Auction[]>;
  return res.data;
};
