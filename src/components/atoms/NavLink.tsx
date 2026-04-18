import Link from 'next/link';

export const NavLink = ({ href, children, className = '' }: any) => {
  return (
    <Link href={href} className={`font-medium transition-colors ${className}`}>
      {children}
    </Link>
  );
};