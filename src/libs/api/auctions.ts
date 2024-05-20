import { Endpoint } from '@/libs/api/endpoints';
import { api } from '@/libs/api/axios';
import { AxiosResponse } from 'axios';
import { Auction } from '@/libs/types/auction';
import { CreateAuctionData } from '@/libs/validators/create-auction-validator';
import { AuctionBid, AutoBid, Bid } from '@/libs/types/bid';
import { CreateAutoBidData } from '@/libs/validators/create-autobid-validator';
import { CreateBidData } from '@/libs/validators/create-bid-validator';
import { UpdateAuctionData } from '@/libs/validators/update-auction-validator';

export const getAuction = async (id: string) => {
  const res = (await api.get(`${Endpoint.AUCTIONS}/${id}`)) as AxiosResponse<Auction>;
  return res.data;
};

export const getAuctionList = async () => {
  const res = (await api.get(Endpoint.AUCTIONS)) as AxiosResponse<Auction[]>;
  return res.data;
};

export const createAuction = async (data: CreateAuctionData) => {
  data.endDate.setHours(24, 0, 0, 0); // Set time to midnight

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

export const getUserAuctions = async () => {
  const res = (await api.get(`${Endpoint.AUCTIONS}/me`)) as AxiosResponse<Auction[]>;
  return res.data;
};

export const getUserWonAuctions = async () => {
  const res = (await api.get(`${Endpoint.AUCTIONS}/me/won`)) as AxiosResponse<Auction[]>;
  return res.data;
};

export const getUserBiddingAuctions = async () => {
  const res = (await api.get(`${Endpoint.AUCTIONS}/me/bidding`)) as AxiosResponse<
    Auction[]
  >;
  return res.data;
};

export const getBiddingHistory = async (id: string) => {
  const res = (await api.get(`${Endpoint.AUCTIONS}/${id}/bids`)) as AxiosResponse<
    AuctionBid[]
  >;
  return res.data;
};

export const createBid = async (data: CreateBidData) => {
  const res = (await api.post(`${Endpoint.AUCTIONS}/${data.auctionId}/bid`, {
    amount: Number(data.amount),
  })) as AxiosResponse<Bid>;
  return res.data;
};

export const createAutoBid = async (data: CreateAutoBidData) => {
  const res = (await api.post(`${Endpoint.AUCTIONS}/${data.auctionId}/auto-bid`, {
    maxAmount: Number(data.maxAmount),
    incrementAmount: Number(data.incrementAmount),
  })) as AxiosResponse<AutoBid>;
  return res.data;
};

export const deleteAuction = async (id: string) => {
  await api.delete(`${Endpoint.AUCTIONS}/${id}`);
};

export const updateAuction = async (id: string, data: UpdateAuctionData) => {
  data.endDate.setHours(24, 0, 0, 0); // Set time to midnight

  const endDateISO = new Date(
    data.endDate.getTime() - data.endDate.getTimezoneOffset() * 60000
  ).toISOString();

  const formData = new FormData();
  formData.append('image', data.fileList?.item(0) as Blob);
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('endsAt', endDateISO);

  const res = (await api.put(`${Endpoint.AUCTIONS}/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })) as AxiosResponse<Auction>;
  return res.data;
};
