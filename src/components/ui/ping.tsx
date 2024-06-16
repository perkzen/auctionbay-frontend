import { PropsWithChildren } from 'react';

const Ping = ({ children }: PropsWithChildren) => {
  return (
    <span className={'relative inline-flex'}>
      <span className="absolute right-0 top-0 -mr-1 flex h-3 w-3 sm:mr-1 sm:mt-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
      </span>
      {children}
    </span>
  );
};

export default Ping;
