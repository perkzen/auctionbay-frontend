import { Endpoint } from '@/libs/api/endpoints';
import { api } from '@/libs/api/axios';
import { AxiosResponse } from 'axios';
import { Auction } from '@/libs/types/auction';
import { CreateAuctionData } from '@/libs/validators/create-auction-validator';

export const getAuctionList = async () => {
  const res = (await api.get(Endpoint.AUCTIONS)) as AxiosResponse<Auction[]>;
  return res.data;
};

export const createAuction = async (data: CreateAuctionData) => {
  const endDateISO = new Date(
    data.endDate.getTime() - data.endDate.getTimezoneOffset() * 60000
  ).toISOString();

  const formData = new FormData();
  formData.append('image', data.fileList?.item(0) as Blob);
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('startingPrice', data.startingPrice.toString());
  formData.append('endsAt', endDateISO);

  const res = (await api.post(Endpoint.AUCTIONS, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })) as AxiosResponse<Auction>;
  return res.data;
};
