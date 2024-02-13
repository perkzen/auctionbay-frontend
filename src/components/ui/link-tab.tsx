import { ReactNode } from 'react';
import LinkButton from '@/components/ui/link-button';

interface LinkTabProps {
  children: ReactNode;
  href: string;
  isActive: boolean;
}

const LinkTab = ({ children, href, isActive }: LinkTabProps) => {
  return (
    <LinkButton
      variant={isActive ? 'secondary' : 'ghost'}
      href={href}
      className={
        'flex h-full w-fit items-center justify-center whitespace-nowrap rounded-4xl p-2 font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-secondary-100 data-[state=active]:text-white data-[state=active]:shadow-sm sm:p-4'
      }
    >
      {children}
    </LinkButton>
  );
};

export default LinkTab;
