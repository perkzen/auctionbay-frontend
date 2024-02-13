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
        'flex h-full w-fit items-center justify-center whitespace-nowrap rounded-4xl p-2 font-medium transition-all sm:p-4'
      }
    >
      {children}
    </LinkButton>
  );
};

export default LinkTab;
