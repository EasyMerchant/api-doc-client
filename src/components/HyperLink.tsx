import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export const HyperLink = ({
  children,
  className,
  ...props
}: LinkProps & { children: ReactNode; className?: string }) => {
  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
};
