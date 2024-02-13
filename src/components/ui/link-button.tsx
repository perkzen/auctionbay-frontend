import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { buttonVariants } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';

interface LinkButtonProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

const LinkButton = ({
  children,
  variant,
  size,
  className,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      {...props}
      className={buttonVariants({
        variant,
        size,
        className,
      })}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
