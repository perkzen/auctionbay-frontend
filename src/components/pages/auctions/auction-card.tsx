import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BidStatusTag from '@/components/ui/bid-status-tag';
import { BidStatus } from '@/models/bid';
import TimeTag from '@/components/ui/time-tag';
import Image from 'next/image';

const AuctionCard = () => {
  return (
    <Card className={'h-[250px] w-[216px]'}>
      <CardHeader className={'flex flex-row justify-between'}>
        <BidStatusTag status={BidStatus.OUTBID} size={'sm'} />
        <TimeTag endsAt={new Date()} size={'sm'} />
      </CardHeader>
      <CardContent className={'p-0'}>
        <div className={'p-2'}>
          <CardTitle className={'text-base font-light'}>Rubic Cude</CardTitle>
          <div className={'mt-2'}>8 €</div>
        </div>
        <div className={'relative h-full p-1'}>
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/64cb/7fb0/3bd3f538ee51f174c3e36ff5bb1d0def?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3yO-EYnS-tyK~3TkZvWsrp2ZN9VeloIk3SGSCWXB4ua4if0fKQtO2ILVb7XpYElLlnRVnlWbTlLA2M89kaChMi9xP2r0Xa1kX2bHQTpqhkW0EeF0SQQMlG-MFnqjT0cKcijeTjbt6emkau2mSMwlewVZCr0Oiwg4J4s6kQLtrIGR~53D7wje7C8M6tE3k53EjzR9DVlBdcQjkeG8fhvuiW8NO2Ry5AWo6EaOZHKL-2TvWuMY2qcxYM6PD0s4ojnTj6OeDXyHjoXabPy0TVeDZjmCxSGsCv5BzNMd3b5PG5bsJsUhjxciGIM1wJRCFL4GDZxNOWIYAlxR1-JSN0Nyg__'
            }
            alt={'image'}
            width="0"
            height="0"
            sizes="100vw"
            className={'h-auto w-full rounded-xl object-cover'}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AuctionCard;
